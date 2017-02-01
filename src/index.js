const $ = require('jquery');
const page = require('page');
const queryString = require('querystring');

const peoplePage = require('./people');

const targetId = 'render-target';

const apiURL = 'http://sodvu.lnx.warwick.ac.uk/';

const templates = {
	home: require('../templates/home.hbs'),
	people: require('../templates/people.hbs'),
	person: require('../templates/person.hbs'),
	item: require('../templates/item.hbs')
};

const partials = {
	peopleList: require('../templates/_peopleList.hbs')
};


const getJSON = function(url) {
	return $.getJSON(apiURL + url);
};

$(document).ready(function() {

	const renderTarget = document.getElementById(targetId);

	const rootURL = '/fac/arts/research/digitalhumanities/tim-sandbox/';

	page.base(rootURL);

	$('a[data-page-url="' + rootURL + '"]').on('click', function() {
		page.redirect('/');
	});

	page('/', function(ctx) {

		$('.id7-page-title h1').text('WIMIC Database');

		const queryValues = queryString.parse(ctx.querystring);

		const apiQuery = { offset: 0, limit: 80 };

		if (queryValues.search !== undefined) {
			apiQuery.search = queryValues.search;
		}

		if (queryValues.offset !== undefined) {
			apiQuery.offset = queryValues.offset;
		}

		if (queryValues.limit !== undefined) {
			apiQuery.limit = queryValues.limit;
		}

		const mode = queryValues.mode || 'people';

		getJSON(mode + '?' + queryString.stringify(apiQuery) ).then((data, status, xhr) => {
			
			if (document.getElementById('irish-writers-main') === null) {
				renderTarget.innerHTML = templates.home({ people: data, initialSearchValue: queryValues.search || '' });
			}

			if(mode === 'people') {
				peoplePage(data, xhr, page, apiQuery, renderTarget, queryValues);
			}
		});
	});

	page('/people', function(ctx) {
		
		renderTarget.innerHTML = templates.people();
	});

	page('/people/:id', function(ctx) {
		getJSON('people/' + ctx.params.id).then((data) => {
			let name = [data.core.title, data.core.firstname, data.core.lastname_keyname]
			.filter((a) => a !== null && a !== undefined)
			.join(' ');
			$('.id7-page-title h1').text(name);
			renderTarget.innerHTML = templates.person(data);
		});
	});

	page('/publications/:id', function(ctx) {

		getJSON('publications/' + ctx.params.id).then((data) => {
			$('.id7-page-title h1').text(data.core.title);
			renderTarget.innerHTML = templates.item(data);
		});
	});

	page({
        hashbang:true
      });
});
