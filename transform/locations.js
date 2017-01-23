// people - birthplace, deathplace
// play - place of first production, place of first revival
// book instance - publication place
//publishers 
// printers
// pub_movie - country of origin * 3

const yaml = require('js-yaml');
const fs   = require('fs');

module.exports = (old_db, new_db) => {

// add a 'name' field
// add a 'part of' field
const createLocationEntity = (currentName, currentData, parent, types, level) => {

    let p = Promise.resolve();

    if(currentName !=='_blank_') {
        p = p.then(() => new_db('entities').insert({
            label: currentName,
            type: types[level],
            creator: 0,
            creation_timestamp: Date(),
            lastmodified_timestamp: Date()   
        }).returning('uid'));
    }

    p.then(() => {
        if (currentData !== null && currentData !== undefined) {
            return Promise.all([
                Object.keys(currentData).map((name) => createLocationEntity(name, currentData[name], parent, types, level+1))
            ]);
        }
    });

    return p;
    
};

return Promise.all([

    old_db('people').select(
        'born_settlement as settlement',
        'born_county as county',
        'born_country as country'
    ),

    old_db('people').select(
        'died_settlement as settlement',
        'died_county as county',
        'died_country as country'
    ),

    old_db('pub_play').select(
        'place_of_first_production_settlement as settlement',
        'place_of_first_production_county as county',
        'place_of_first_production_country as country'
    ),

    old_db('pub_play').select(
        'place_of_first_revival_settlement as settlement',
        'place_of_first_revival_county as county',
        'place_of_first_revival_country as country'
    ),

    old_db('pub_book_instances').select(
        'loc_publication_settlement as settlement',
        'loc_publication_county as county',
        'loc_publication_country as country'
    ),

    old_db('comp_publishers').select(
        'settlement',
        'county as county',
        'country'
    ),

    old_db('comp_printers').select(
        'settlement',
        'county as county',
        'country'
    ),

    old_db('pub_movie').select(
        'country_of_origin as country'
    ),

    old_db('pub_movie').select(
        'country_of_origin_2 as country'
    ),

    old_db('pub_movie').select(
        'country_of_origin_3 as country'
    )

]).then((results) => {
    const allPlaces = results.reduce((a,b) => a.concat(b), []);
    const allActualPlaces = allPlaces.filter((place) => place.settlement !== null | place.county !== null | place.country !== null)
    
    const placesTree = {};

    for(let i = 0; i<allActualPlaces.length; i++) {

        const place = allActualPlaces[i];
        const country = place.country === null ? '_blank_' : place.country;    
        const county = place.county === null ? '_blank_' : place.county;    

        if(country !== null && placesTree[country] === undefined) {
            placesTree[country] = {};
        }

        if(county !== null && placesTree[country][county] === undefined) {
            placesTree[country][county]  = {};
        }
            
        if(place.settlement !== null && placesTree[country][county][place.settlement] === undefined) {
            placesTree[country][county][place.settlement] = {};
        }     
    }

    const yamlTree = yaml.safeDump(placesTree);

    return new Promise((res, rej) => {
        fs.writeFile("locations.yaml", yamlTree, function(err) {
            if(err) {
                rej(err);
            }

            res(placesTree);
        }); 
    })
})
// .then((placesTree) => {
//     return new_db('entity_types').select()
//     .then((entityTypes) => {
//         const countryType = entityTypes.find((et) => et.name === 'country');
//         const countyType = entityTypes.find((et) => et.name === 'county');
//         const settlementType = entityTypes.find((et) => et.name === 'settlement');

//         return Promise.all(Object.keys(placesTree).map((name) => createLocationEntity(name, placesTree[name], 0,
//              [countryType.uid, countyType.uid, settlementType.uid], 0)));
//     });
// });

}
