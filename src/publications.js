const $ = require('jquery');
const queryString = require('querystring');

const partials = {
	peopleList: require('../templates/_peopleList.hbs'),
    pubList: require('../templates/_pubList.hbs')
};

module.exports = function(data, xhr, page, apiQuery, renderTarget, queryValues) {

    let currentLabel = undefined;

    data = data.map((datum) => {
        if(datum.title === null ? currentLabel !== null : datum.title[0] !== currentLabel) {
            datum.header = datum.title === null ? 'Unknown' : datum.title[0];
            currentLabel = datum.title === null ? null : datum.title[0];
        }
        if(datum.title === null && datum.title === null) {
            datum.title = 'Unknown Title';
        }
        return datum;
    });

    document.getElementById('list-target').innerHTML = partials.pubList({ pubs: data });

    $('#main-pagination').twbsPagination({
        totalPages: Math.ceil(parseInt(xhr.getResponseHeader('X-total-count'))/apiQuery.limit),
        visiblePages: 7,
        startPage: Math.floor(parseInt(apiQuery.offset)/parseInt(apiQuery.limit)) + 1,
        initiateStartPageClick: false,
        onPageClick: function (event, pageNum) {
            apiQuery.offset = (pageNum - 1) * apiQuery.limit;
            page.redirect('/publications/?' + queryString.stringify(apiQuery));
        }
    });
}
