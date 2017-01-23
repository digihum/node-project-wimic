var serve = require('koa-static');
var _ = require('koa-route');
var koa = require('koa');
var app = koa();
var Handlebars = require('handlebars');
var fs = require('fs');
var Knex = require('knex');

const rawItemTemplate = fs.readFileSync('./templates/item.hbs');
const itemTemplate = Handlebars.compile(rawItemTemplate.toString());

const rawPersonTemplate = fs.readFileSync('./templates/person.hbs');
const personTemplate = Handlebars.compile(rawPersonTemplate.toString());

const peopleTemplate = Handlebars.compile(fs.readFileSync('./templates/people.hbs').toString());
const homeTemplate = Handlebars.compile(fs.readFileSync('./templates/home.hbs').toString());

const knexConfig = {
	client: 'sqlite3',
	connection: {
	  filename: "./new.db"
	},
	useNullAsDefault: true
};

knex = Knex(knexConfig);

// public assets
app.use(serve('./public'));

app.use(_.get('/', function* (id) {
	const people = yield knex.select().from('people');

	this.body = homeTemplate({ people });
}));


app.use(_.get('/people', function* (id) {
	const people = yield knex.select().from('people');

	this.body = peopleTemplate({ people });
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

	this.body = itemTemplate({ core, play, movie, article, book, bookChapter, article, authors });
}));

app.use(_.get('/people/:id', function* (id) {
	const core = yield knex.select().from('people').where({ DB_id: id }).first();
	// play, movie, book, book chapter, journal edition or article
	const works = yield knex.select('col_Authors.*', 'pub_Publications.title').from('col_Authors')
	.where({ person_id: id })
	.innerJoin('pub_Publications', 'col_Authors.publication_id', 'pub_Publications.DB_id');

	this.body = personTemplate({ core, works });
}));

app.listen(3000);

console.log('listening on port 3000');
