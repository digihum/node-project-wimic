


module.exports = (old_db, new_db) => {

    const addPerson = (data, entityType, predicates) => {
         return new_db('entities')
        .insert({
            label: `${data.firstname} ${data.lastname_keyname}`,
            type: entityType,
            creator: 0,
            creation_timestamp: Date(),
            lastmodified_timestamp: Date()   
        }).returning('uid')
        .then(([uid]) => {
            let recordPromise = Promise.resolve();

            if(data.firstname !== null && data.firstname !== undefined) {
                recordPromise = recordPromise.then(() => {
                    return new_db('records').insert({
                        predicate: predicates.find((pred) => pred.name === 'firstname'),
                        entity: uid,
                        score: 3,
                        value_type: 'string',
                        value_string: data.firstname,
                        creator: 0,
                        creation_timestamp: Date(),
                        lastmodified_timestamp: Date()   
                    });
                });
            }


            return recordPromise;
        });
    }


    return Promise.all([
        old_db('people').select(),
        new_db('entity_types').select('uid').where({ name: 'person' }).first(),
        new_db('predicates').select()
    ]) 
    .then(([peopleData, entityType, predicates]) => {
        return Promise.all(peopleData.map((person) => addPerson(person, entityType.uid, predicates)));
    });
};
