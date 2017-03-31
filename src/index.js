const $ = require('jquery');
const page = require('page');
const queryString = require('querystring');

const peoplePage = require('./people');
const pubsPage = require('./publications');

const targetId = 'render-target';
let renderTarget = null;

const apiURL = 'http://sodvu.lnx.warwick.ac.uk/';
const rootURL = '/fac/arts/history/irishwomenwriters/database/';

const templates = {
	home: require('../templates/home.hbs'),
	people: require('../templates/people.hbs'),
	person: require('../templates/person.hbs'),
	item: require('../templates/item.hbs')
};

const partials = {
	fakeMenu: require('../templates/_tertiary_menu.hbs')
};


const getJSON = function(url) {
	return $.getJSON(apiURL + url);
};

const setupSwitchDimensions = (page, apiQuery) => $('#switch-dimension').on('click', function(e) {	

	if (location.hash.search('#!/publications/') === 0) {
		page.redirect('/people/?' + queryString.stringify(apiQuery));
	}

	if (location.hash.search('#!/people/') === 0 || location.hash.length === 0 || location.hash.search(/#!\/\?/) === 0) {
		page.redirect('/publications/?' + queryString.stringify(apiQuery));
	}
	
});

const setupNameFilter = (page, apiQuery) => document.getElementById('name-filter').addEventListener('keyup', function(e) {
	if (e.target.value.length > 0) {
		apiQuery.search = e.target.value;
		apiQuery.offset = 0;					
	} else {
		delete apiQuery.search;
	}
	
	if (location.hash.search('#!/publications/') === 0) {
		page.redirect('/publications/?' + queryString.stringify(apiQuery));
	}

	if (location.hash.search('#!/people/') === 0 || location.hash.length === 0 || location.hash.search(/#!\/\?/) === 0) {
		page.redirect('/people/?' + queryString.stringify(apiQuery));
	}
});

const home = (ctx) => {

	$('.id7-page-title h1').text('WIMIC Database - All People');
	$('.wimic-fake-menu').remove();
	$('.id7-navigation').append(partials.fakeMenu({ baseURL: rootURL }));

	const queryValues = queryString.parse(ctx.querystring);

	const apiQuery = _.omit({ 
		search: queryValues.search,
		offset: queryValues.offset || 0,
		limit: queryValues.limit || 80
	}, _.isUndefined);	

	getJSON('people?' + queryString.stringify(apiQuery) ).then((data, status, xhr) => {
		
		if (document.getElementById('irish-writers-main') === null) {
			renderTarget.innerHTML = templates.home({initialSearchValue: queryValues.search || '' });
			setupNameFilter(page, apiQuery);
			//setupSwitchDimensions(page, apiQuery);
		}

		// $('#irish-writers-main #wimic-title').text('People');
		// $('#irish-writers-main #switch-dimension').text('Publications');

		peoplePage(data, xhr, page, apiQuery, renderTarget, queryValues);
	});
}

const publications = (ctx) => {

	$('.id7-page-title h1').text('WIMIC Database - All Publications');
	$('.wimic-fake-menu').remove();
	$('.id7-navigation').append(partials.fakeMenu({ baseURL: rootURL }));
	
	const queryValues = queryString.parse(ctx.querystring);

	const apiQuery = _.omit({ 
		search: queryValues.search,
		offset: queryValues.offset || 0,
		limit: queryValues.limit || 80
	}, _.isUndefined);	

	getJSON('publications?' + queryString.stringify(apiQuery) ).then((data, status, xhr) => {
		
		if (document.getElementById('irish-writers-main') === null) {

			renderTarget.innerHTML = templates.home({initialSearchValue: queryValues.search || '' });		

			setupNameFilter(page, apiQuery);
			// setupSwitchDimensions(page, apiQuery);
		}
			

		// $('#irish-writers-main #wimic-title').text('Publications');
		// $('#irish-writers-main #switch-dimension').text('People');

		pubsPage(data, xhr, page, apiQuery, renderTarget, queryValues);
	});
}

var processWork = function(work) {
	var roles = [
	'is_sole_author',
	'is_main_author',
	'is_co_author',
	'is_editor',
	'is_co-editor',
	'is_foreword_author',
	'is_translator',
	'is_illustrator',
	'is_ghost',
	'is_preface',
	'is_original_author',
	'is_sub_editor',
	'is_compiler',
	'is_introduction_author',
	'is_notes_author',
	'is_director',
	'is_co_director',
	'is_producer',
	'is_executive_producer',
	'is_co_producer',
	'is_scriptwriter',
	'is_co_scriptwriter',
	'is_screenwriter',
	'is_co_screenwriter',
	'is_cinematographer',
	'is_animator',
	'is_interviewer',
	'is_interviewee'
	];

	var results = [];

	roles.forEach(function(role) {
		if(work[role] === 1) {
			results.push({ 
				role: role.substr(3).replace('_', ' '),
				work: work
			})
		}
	})

	return results;
};

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

			$('.wimic-fake-menu').remove();
			$('.id7-navigation').append(partials.fakeMenu({ baseURL: rootURL }));

			data.works = data.works.map(processWork).reduce(function(prev, curr) { return prev.concat(curr)}, []);

			let name = [data.core.title, data.core.firstname, data.core.lastname_keyname]
			.filter((a) => a !== null && a !== undefined)
			.join(' ') || 'Unknown Name';
			
			$('.id7-page-title h1').text(name);
			renderTarget.innerHTML = templates.person(data);
		});
	});

	page('/publications/:id', function(ctx) {

		getJSON('publications/' + ctx.params.id).then((data) => {

			$('.wimic-fake-menu').remove();
			$('.id7-navigation').append(partials.fakeMenu({ baseURL: rootURL }));
			$('.id7-page-title h1').text(data.core.title || 'Unknown Title');

			data.authors = data.authors.map(processWork).reduce(function(prev, curr) { return prev.concat(curr)}, []);

			renderTarget.innerHTML = templates.item(data);
		});
	});

	page('*', function() {
		page('/');
	})

	page({
        hashbang:true
      });
});
