const $ = require('jquery');
const page = require('page');
const queryString = require('querystring');

const targetId = 'render-target';

const apiURL = 'http://otros.lnx.warwick.ac.uk/';

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

	page.base('/fac/arts/research/digitalhumanities/tim-sandbox/');

	page('/', function(ctx) {

		const queryValues = queryString.parse(ctx.querystring);

		const apiQuery = { page: 0 };

		if (queryValues.search !== undefined) {
			apiQuery.search = queryValues.search;
		}

		if (queryValues.page !== undefined) {
			apiQuery.page = queryValues.page;
		}

		getJSON('people?' + queryString.stringify(apiQuery) ).then((data) => {

			if(document.getElementById('people-list') !== null) {

				document.getElementById('people-list').innerHTML = partials.peopleList({ people: data, initialSearchValue: queryValues.search || '' });
			} else {
				renderTarget.innerHTML = templates.home({ people: data, initialSearchValue: queryValues.search || '' });
				document.getElementById('name-filter').addEventListener('keyup', function(e) {
					if (e.target.value.length > 0) {
						apiQuery.search = e.target.value;						
					} else {
						delete apiQuery.search;
					}			
					page.redirect('/?' + queryString.stringify(apiQuery));		
				});
				
				$('#main-pagination').twbsPagination({
					totalPages: Math.ceil(9647/50),
					visiblePages: 7,
					onPageClick: function (event, pageNum) {
						apiQuery.page = pageNum - 1;
						page.redirect('/?' + queryString.stringify(apiQuery));
					}
				});
			}
		
		});
	});

	page('/people', function(ctx) {
		renderTarget.innerHTML = templates.people();
	});

	page('/people/:id', function(ctx) {
		getJSON('people/' + ctx.params.id).then((data) => {
			renderTarget.innerHTML = templates.person(data);
		});
	});

	page('/publications/:id', function(ctx) {
		getJSON('publications/' + ctx.params.id).then((data) => {
			renderTarget.innerHTML = templates.item(data);
		});
	});

	page({
        hashbang:true
      });
});
