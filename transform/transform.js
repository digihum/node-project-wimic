var sqlite3 = require('sqlite3');
var _ = require('lodash');
var fs = require('fs');

var db = new sqlite3.Database('./irishwriters_fixed.sqlite', sqlite3.OPEN_READONLY);

let newId = 0;

const commonData = (row) => ({
	id: newId += 1,
	oldId: row.DB_id,
	title: row.title,
	subtitle: row.subtitle,
	fictionOrNonFiction: row['fiction_non-fiction'],
	genre: row.genre,
	isFirstEdition: row.is_first_edition === 1,
	firstEditionId: row.first_edition_id,
	editionType: row.this_edition_type,
	inSeries: row.in_series,
	volume: row.volume,
	volumeIndex: row.volume_index_number,
	publishDate: `${row.publish_year}-${row.publish_month}-${row.publish_day}`,
	circa: row.circa,
	language: [row.language1, row.language2, row.language3].filter((a) => !_.isNil(a)),
	sources: row.sources,
	seriesTitle: row.series_title,
});



db.on("open", () => { 

	const moviePromise = new Promise((res) => db.all(`

SELECT * FROM pub_movie 
LEFT JOIN pub_Publications ON pub_movie.publication_id = pub_Publications.DB_id
LEFT JOIN comp_movie ON pub_movie.production_company = comp_movie.DB_id;

`, (err, rows) => {
		rows = rows.map((row) => Object.assign({

			type: 'movie',

			movie: {
				length: row.length_minutes,
				countryOfOrigin: [row.country_of_origin, row.country_of_origin2, row.country_of_origin3].filter((a) => !_.isNil(a)),
				notes: row.notes,
				dateVideo: row.data_video,
				dateDVD: row.data_dvd,
				productionCompany: {
					name: row.company_name
				}	
			}
			
				
		}, commonData(row)));
		rows.forEach((row) => {
			fs.writeFileSync(`./data/publications/${row.id}.json`, JSON.stringify(row));
		});
		res();
	}));

		const playPromise = new Promise((res) => db.all(`

SELECT * FROM pub_play 
LEFT JOIN pub_Publications ON pub_play.publication_id = pub_Publications.DB_id
LEFT JOIN comp_theatre ON pub_play.theatre_company = comp_theatre.DB_id;

`, (err, rows) => {
		rows = rows.map((row) => Object.assign({

			type: 'play',

			play: {

				placeOfFirstProduction: _.omitBy({
					settlement: row.place_of_first_production_settlement,
					county: row.place_of_first_production_county,
					country: row.place_of_first_production_country,
				}, _.isNil),
				firstRevivalDate: `${row.first_revival_year}-${row.first_revival_month}-${row.first_revival_day}`,
				placeOfFirstRevival: _.omitBy({
					settlement: row.place_of_first_revival_settlement,
					county: row.place_of_first_revival_county,
					country: row.place_of_first_revival_country,
				}, _.isNil),
				venue: row.venue,
				revivalVenue: row.revivalVenue,
				notes: row.notes				
			}
			
				
		}, commonData(row)));
		rows.forEach((row) => {
			fs.writeFileSync(`./data/publications/${row.id}.json`, JSON.stringify(row));
		});
		res();
	}));

	Promise.all([moviePromise, playPromise]).then(() => db.close());
});
