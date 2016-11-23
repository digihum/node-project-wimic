


module.exports = (old_db, new_db) => {

    const addPublication = (data, entityType) => {
        return new_db('entities')
        .insert({
            label: data['title'],
            type: entityType,
            creator: 0,
            creation_timestamp: Date(),
            lastmodified_timestamp: Date()   
        }).returning('uid')
        .then(([uid]) => {
            let recordPromise = Promise.resolve();

            recordPromise = recordPromise.resolve(uid);
            return recordPromise;
        });
    }

    const tables = ['play', 'book', 'journal_edition', 'article', 'movie'];

    return new_db('entity_types').select()
    .then((entityTypes) => {

        return Promise.all(tables.map((table) => {
            return old_db.select()
            .from('pub_Publications')
            .innerJoin('pub_' + table, 'pub_Publications.DB_id', 'pub_' + table + '.publication_id')
            .then((results) => {
                return Promise.all((result) =>
                    addPublication(result, entityType.find((a) => a.name === table).uid));
            });
        }));
    });
};
