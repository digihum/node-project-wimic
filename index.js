const _ = require('koa-route');
const koa = require('koa');
const cors = require('koa-cors');
const fs = require('fs');
const Knex = require('knex');
const gzip = require('koa-gzip');
const queryString = require('querystring');

const api = require('./api');

var app = new koa();

// connect to database
const knexConfig = {
	client: 'sqlite3',
	connection: {
	  filename: "./irish-writers.sqlite"
	},
	useNullAsDefault: true
};

knex = Knex(knexConfig);

// compress results
app.use(gzip());

// allow cross-site requests from warwick URLs
app.use(cors({
	origin: (req) => {
		return req.header.origin === 'http://www2.warwick.ac.uk' || req.header.origin === undefined ? req.header.origin : false;
	},
	expose: ['X-total-count']
}));

/**
 * Get all people
 */

app.use(_.get('/people', async (ctx) => {
	const result = await api.getAllPeople(knex, queryString.parse(ctx.request.querystring));
	ctx.set('X-total-count', result.count);
	ctx.body = result.data;
}));

/**
 * Get all Publications
 */

app.use(_.get('/publications',  async (ctx) => {
	const result = await api.getAllPublications(knex, queryString.parse(ctx.request.querystring));
	ctx.set('X-total-count', result.count);
	ctx.body = result.data;
}));

/**
 * Get a single publication
 */
app.use(_.get('/publications/:id', async (ctx, id) => {
	ctx.body = await api.getSinglePublication(knex, id);
}));


/**
 * Get a single person
 */

app.use(_.get('/people/:id', async (ctx, id) => {
	ctx.body = await api.getSinglePerson(knex, id);
}));

/**
 * If the URL is anything else, just return this message
 */
app.use(async (ctx) => {
	ctx.body = 'API Server for the Women in Modern Irish Culture project';
});

/**
 * Start the server on port 8080
 */
app.listen(8080);

console.log('Server started on port 8080');
