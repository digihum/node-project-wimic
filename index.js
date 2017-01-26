var _ = require('koa-route');
var koa = require('koa');
var cors = require('koa-cors');
var app = koa();
var fs = require('fs');
var Knex = require('knex');
var gzip = require('koa-gzip');
var queryString = require('querystring');

const knexConfig = {
	client: 'sqlite3',
	connection: {
	  filename: "./new.db"
	},
	useNullAsDefault: true
};

knex = Knex(knexConfig);

app.use(gzip());

app.use(cors({
	origin: function(req) {
		return req.header.origin === 'http://www2.warwick.ac.uk' || req.header.origin === undefined ? req.header.origin : false;
	},
	expose: ['X-total-count']
}));

app.use(_.get('/people', function* (id) {
	const queryParams = queryString.parse(this.request.querystring)

	let knexQuery =  knex.select('DB_id', 'title', 'firstname', 'lastname_keyname').from('people');

	if(queryParams.sort !== undefined) {
		switch(queryParams.sort) {
			case 'lastname':
				knexQuery = knexQuery.orderBy('lastname_keyname', 'asc');
				break;
			case 'firstname':
				knexQuery = knexQuery.orderBy('firstname', 'asc')
				break;
			case 'birthyear':
				knexQuery = knexQuery.orderBy(['birth_year', 'birth_month', 'birth_day_of_month'], 'asc')
				break;
		}
	} else {
		knexQuery = knexQuery.orderBy('lastname_keyname', 'asc');
	}

	if(queryParams.search !== undefined) {
		knexQuery = knexQuery
		.where('lastname_keyname', 'like', '%' + queryParams.search + '%')
		.orWhere('firstname', 'like', '%' + queryParams.search + '%');
	}

	if(queryParams.lastname !== undefined) {
		knexQuery = knexQuery.where('lastname_keyname', 'like', '%' + queryParams.lastname + '%');
	}

	if(queryParams.limit !== undefined && queryParams.offset !== undefined) {
		const count = yield knexQuery.clone().count().then((result) => result[0]['count(*)']);
		knexQuery = knexQuery.limit(parseInt(queryParams.limit)).offset(parseInt(queryParams.offset));		
		this.set('X-total-count', count);
	}

	this.body = yield knexQuery;
}));

app.use(_.get('/publications', function* () {
	const queryParams = queryString.parse(this.request.querystring)


	let knexQuery = knex.select(['title', 'DB_id']).from('pub_Publications');
	knexQuery = knexQuery.orderBy('title', 'asc');

	if(queryParams.title !== undefined) {
		knexQuery = knexQuery.where('title', 'like', '%' + queryParams.title + '%');
	}

	if(queryParams.limit !== undefined && queryParams.offset !== undefined) {
		const count = yield knexQuery.clone().count().then((result) => result[0]['count(*)']);
		knexQuery = knexQuery.limit(parseInt(queryParams.limit)).offset(parseInt(queryParams.offset));		
		this.set('X-total-count', count);
	}

	this.body = yield knexQuery;
}));

// $ GET /package.json
// or use absolute paths
app.use(_.get('/publications/:id', function* (id) {
	const core = yield knex.select().from('pub_Publications').where({ DB_id: id }).first();
	// play, movie, book, book chapter, journal edition or article
	const play = yield knex.select().from('pub_play').where({ publication_id: id }).first();
	const movie = yield knex.select().from('pub_movie').where({ publication_id: id }).first();
	const journalEdition = yield knex.select().from('pub_journal_edition').where({ publication_id: id }).first();
	const book = yield knex.select().from('pub_book').where({ publication_id: id }).first();
	const bookChapter = yield knex.select().from('pub_book_chapter').where({ publication_id: id }).first();
	const article = yield knex.select().from('pub_article').where({ publication_id: id }).first();

	const authors = yield knex.select('col_Authors.*', 'people.title', 'people.firstname', 'people.lastname_keyname').from('col_Authors')
		.where({ publication_id: id })
		.innerJoin('people', 'col_Authors.person_id', 'people.DB_id')

	this.body = { core, play, movie, article, book, bookChapter, article, authors };
}));

app.use(_.get('/people/:id', function* (id) {
	const core = yield knex.select().from('people').where({ DB_id: id }).first();
	// play, movie, book, book chapter, journal edition or article
	const works = yield knex.select('col_Authors.*', 'pub_Publications.title').from('col_Authors')
	.where({ person_id: id })
	.innerJoin('pub_Publications', 'col_Authors.publication_id', 'pub_Publications.DB_id');

	this.body = { core, works };
}));

app.listen(8080);

console.log('listening on port 8080');
