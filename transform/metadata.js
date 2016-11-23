const yaml = require('js-yaml');
const fs   = require('fs');

module.exports = (old_db, new_db) => {

    const addEntityType = (data, parent) => {
    return Object.keys(data).reduce((p, entityTypeName) => {

        const insertPromise = new_db('entity_types').insert({
            parent: parent,
            name: entityTypeName,
            creator: 0,
            creation_timestamp: Date(),
            lastmodified_timestamp: Date()    
        }).returning('uid');

        if(data[entityTypeName] !== null) {
            return p.then(() => insertPromise.then((parentId) => {
                return addEntityType(data[entityTypeName], parentId[0])
            }));
        }

        return p.then(() => insertPromise);
            }, Promise.resolve());
        }

        const addPredicate = (name, data) => {

            let rangeType;
            let rangeRef;

            let rangePromise = Promise.resolve({ range_type: data.range });
            if(['string', 'integer', 'date', 'source'].indexOf(data.range) === -1) {
                rangePromise = new_db('entity_types')
                .select('uid')
                .where({ name: data.range })
                .then((result) => {
                    if(result.length === 0) {
                        throw Error('aggh');
                    }
                    return {
                        range_type: 'entity',
                        range_ref: result[0].uid
                    };
                });
            }
            
            return Promise.all([
                new_db('entity_types').select('uid').where({ name: data.domain }).first(),
                rangePromise
            ]).then(([domainResult, rangeResult]) => {
                if(domainResult === undefined) {
                    throw Error('aggh');
                }
                const dataObject = Object.assign({
                    name,
                    domain: domainResult.uid,
                    creator: 0,
                    creation_timestamp: Date(),
                    lastmodified_timestamp: Date()    
                }, rangeResult);
                return new_db('predicates').insert(dataObject);
            });
        
        }



    // Get document, or throw exception on error
    const entityTypes = yaml.safeLoad(fs.readFileSync('data/entity_types.yml', 'utf8')).entity_types;
    const predicates = yaml.safeLoad(fs.readFileSync('data/predicates.yml', 'utf8')).predicates;

    return addEntityType(entityTypes, 0)
    .then(() => Promise.all(Object.keys(predicates).map((pred) => addPredicate(pred, predicates[pred]))));
};
