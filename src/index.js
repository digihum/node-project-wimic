const $ = require('jquery');
const page = require('page');
const queryString = require('querystring');

const peoplePage = require('./people');
const pubsPage = require('./publications');

const targetId = 'render-target';
let renderTarget = null;

const apiURL = 'http://sodvu.lnx.warwick.ac.uk/';
const rootURL = '/fac/arts/research/digitalhumanities/tim-sandbox/';

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

const setupSwitchDimensions = (page, apiQuery) => $('#switch-dimension').on('click', function(e) {	

	if (location.hash.search('#!/publications/') === 0) {
		page.redirect('/people/?' + queryString.stringify(apiQuery));
	}

	if (location.hash.search('#!/people/') === 0 || location.hash.length === 0) {
		page.redirect('/publications/?' + queryString.stringify(apiQuery));
	}
	
});

const home = (ctx) => {

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

	getJSON('people?' + queryString.stringify(apiQuery) ).then((data, status, xhr) => {
		
		if (document.getElementById('irish-writers-main') === null) {

			renderTarget.innerHTML = templates.home({initialSearchValue: queryValues.search || '' });			

			document.getElementById('name-filter').addEventListener('keyup', function(e) {
				if (e.target.value.length > 0) {
					apiQuery.search = e.target.value;
					apiQuery.offset = 0;					
				} else {
					delete apiQuery.search;
				}
				
				if (location.hash.search('#!/publications/') === 0) {
					page.redirect('/publications/?' + queryString.stringify(apiQuery));
				}

				if (location.hash.search('#!/people/') === 0 || location.hash.length === 0) {
					page.redirect('/people/?' + queryString.stringify(apiQuery));
				}
			});

			setupSwitchDimensions(page, apiQuery);
		}

		$('#irish-writers-main #wimic-title').text('People');
		$('#irish-writers-main #switch-dimension').text('Publications');

		peoplePage(data, xhr, page, apiQuery, renderTarget, queryValues);
	});
}

const publications = (ctx) => {

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

	getJSON('publications?' + queryString.stringify(apiQuery) ).then((data, status, xhr) => {
		
		if (document.getElementById('irish-writers-main') === null) {

			renderTarget.innerHTML = templates.home({initialSearchValue: queryValues.search || '' });		


			document.getElementById('name-filter').addEventListener('keyup', function(e) {
				if (e.target.value.length > 0) {
					apiQuery.search = e.target.value;
					apiQuery.offset = 0;					
				} else {
					delete apiQuery.search;
				}			
				page.redirect('/publications/?' + queryString.stringify(apiQuery));		
			});		

			setupSwitchDimensions(page, apiQuery);
		}
			

		$('#irish-writers-main #wimic-title').text('Publications');
		$('#irish-writers-main #switch-dimension').text('People');

		pubsPage(data, xhr, page, apiQuery, renderTarget, queryValues);
	});
}

$(document).ready(function() {

	renderTarget = document.getElementById(targetId);

	page.base(rootURL);

	$('a[data-page-url="' + rootURL + '"]').on('click', function() {
		page.redirect('/');
	});

	page('/', home);
	page('/people', home);
	page('/publications', publications);

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
