


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

    old_db.select()
    .from('pub_Publications')
    .innerJoin('pub_play', 'pub_Publications.DB_id', 'pub_play.publication_id');

    old_db.select()
    .from('pub_Publications')
    .innerJoin('pub_book', 'pub_Publications.DB_id', 'pub_book.publication_id');

    old_db.select()
    .from('pub_Publications')
    .innerJoin('pub_journal_edition', 'pub_Publications.DB_id', 'pub_journal_edition.publication_id');

    old_db.select()
    .from('pub_Publications')
    .innerJoin('pub_article', 'pub_Publications.DB_id', 'pub_article.publication_id');

    old_db.select()
    .from('pub_Publications')
    .innerJoin('pub_movie', 'pub_Publications.DB_id', 'pub_article.movie_id');

    return Promise.resolve();
};
