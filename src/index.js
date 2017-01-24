const $ = require('jquery');
const page = require('page');

const targetId = 'render-target';

const apiURL = 'http://otros.lnx.warwick.ac.uk/';

const templates = {
	home: require('../templates/home.hbs'),
	people: require('../templates/people.hbs'),
	person: require('../templates/people.hbs'),
	item: require('../templates/item.hbs')
};

const getJSON = function(url) {
	return $.getJSON(apiURL + url);
};

$(document).ready(function() {

	const renderTarget = document.getElementById(targetId);

	page.base('/fac/arts/research/digitalhumanities/tim-sandbox/');

	page('/', function() {
		getJSON('people').then((data) => {
			renderTarget.innerHTML = templates.home(data);
		});
	});

	page('/people', function() {
		renderTarget.innerHTML = templates.people();
	});

	page({
        hashbang:true
      });
});
