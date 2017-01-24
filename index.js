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
		console.log(req.header('Origin'));
		return req.header('Origin') === 'warwick.ac.uk';
	}
}));

app.use(_.get('/people', function* (id) {
	const queryParams = queryString.parse(this.request.querystring)

	if(queryParams.page !== undefined) {
		this.body = yield knex.select('DB_id', 'title', 'forename', 'lastname_keyname').from('people').limit(50).offset(parseInt(queryParams.page) * 50)
		return;
	}

	if(queryParams.count !== undefined) {
		this.body = yield knex.select().from('people').count().then((result) => result[0]['count(*)']);
		return;
	}

	this.body = yield knex.select('DB_id', 'title', 'forename', 'lastname_keyname').from('people');
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
