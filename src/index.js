const $ = require('jquery');
const page = require('page');
const queryString = require('querystring');

const targetId = 'render-target';

const apiURL = 'http://otros.lnx.warwick.ac.uk/';

const templates = {
	home: require('../templates/home.hbs'),
	people: require('../templates/people.hbs'),
	person: require('../templates/people.hbs'),
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

	page.base('/fac/arts/research/digitalhumanities/tim-sandbox/');

	page('/', function(ctx) {

		const queryValues = queryString.parse(ctx.querystring);

		const apiQuery = { page: 0 };

		if (queryValues.search !== undefined) {
			apiQuery.search = queryValues.search;
		}

		getJSON('people?' + queryString.stringify(apiQuery) ).then((data) => {

			if(document.getElementById('people-list') !== null) {

				document.getElementById('people-list').innerHTML = partials.peopleList({ people: data, initialSearchValue: queryValues.search || '' });
			} else {
				renderTarget.innerHTML = templates.home({ people: data, initialSearchValue: queryValues.search || '' });
				document.getElementById('name-filter').addEventListener('keyup', function(e) {
					if (e.target.value.length > 0) {
						page.redirect('/?search=' + e.target.value);
					} else {
						page.redirect('/');
					}
					
				});
			}
		
		});
	});

	page('/people', function(ctx) {
		renderTarget.innerHTML = templates.people();
	});

	page({
        hashbang:true
      });
});
