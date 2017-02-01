const $ = require('jquery');
const queryString = require('querystring');

const templates = {
	home: require('../templates/home.hbs'),
	people: require('../templates/people.hbs'),
	person: require('../templates/person.hbs'),
	item: require('../templates/item.hbs')
};

const partials = {
	peopleList: require('../templates/_peopleList.hbs')
};

module.exports = function(data, xhr, page, apiQuery, renderTarget, queryValues) {

    let currentLabel = undefined;

    data = data.map((datum) => {
        if(datum.lastname_keyname === null ? currentLabel !== null : datum.lastname_keyname[0] !== currentLabel) {
            datum.header = datum.lastname_keyname === null ? 'Unknown' : datum.lastname_keyname[0];
            currentLabel = datum.lastname_keyname === null ? null : datum.lastname_keyname[0];
        }
        if(datum.firstname === null && datum.lastname_keyname === null) {
            datum.lastname_keyname = 'Unknown Name';
        }
        return datum;
    });

    if(document.getElementById('list-target') !== null) {

        document.getElementById('list-target').innerHTML = partials.peopleList({ people: data, initialSearchValue: queryValues.search || '' });
    } else {
        renderTarget.innerHTML = templates.home({ people: data, initialSearchValue: queryValues.search || '' });

        document.getElementById('switch-to-publications').addEventListener('click', function(e) {					
            page.redirect('/?mode=publications');		
        });

        document.getElementById('name-filter').addEventListener('keyup', function(e) {
            if (e.target.value.length > 0) {
                apiQuery.search = e.target.value;
                apiQuery.offset = 0;					
            } else {
                delete apiQuery.search;
            }			
            page.redirect('/?' + queryString.stringify(apiQuery));		
        });
    }

    $('#main-pagination').twbsPagination({
        totalPages: Math.ceil(parseInt(xhr.getResponseHeader('X-total-count'))/apiQuery.limit),
        visiblePages: 7,
        startPage: Math.floor(parseInt(apiQuery.offset)/parseInt(apiQuery.limit)) + 1,
        initiateStartPageClick: false,
        onPageClick: function (event, pageNum) {
            apiQuery.offset = (pageNum - 1) * apiQuery.limit;
            page.redirect('/?' + queryString.stringify(apiQuery));
        }
    });
}
