/**
 * Get all people
 */

const getAllPeople = async (knex, queryParams) => {

	let knexQuery =  knex.select('DB_id', 'title', 'firstname', 'lastname_keyname').from('people');

	if(queryParams.sort !== undefined) {
		switch(queryParams.sort) {
			case 'lastname':
				knexQuery = knexQuery.orderBy('lastname_keyname', 'asc');
				break;
			case 'firstname':
				knexQuery = knexQuery.orderBy('firstname', 'asc')
				break;
			case 'birthyear':
				knexQuery = knexQuery.orderBy(['birth_year', 'birth_month', 'birth_day_of_month'], 'asc')
				break;
		}
	} else {
		knexQuery = knexQuery.orderBy('lastname_keyname', 'asc');
	}

	if(queryParams.search !== undefined) {
		knexQuery = knexQuery
		.where('lastname_keyname', 'like', '%' + queryParams.search + '%')
		.orWhere('firstname', 'like', '%' + queryParams.search + '%');
	}

	if(queryParams.lastname !== undefined) {
		knexQuery = knexQuery.where('lastname_keyname', 'like', '%' + queryParams.lastname + '%');
	}

	const count = await knexQuery.clone().count().then((result) => result[0]['count(*)']);

	if(queryParams.limit !== undefined && queryParams.offset !== undefined) {		
		knexQuery = knexQuery.limit(parseInt(queryParams.limit)).offset(parseInt(queryParams.offset));		
	}

	return {
		count: count,
		data: await knexQuery
	}
};

/**
 * Get all Publications
 */

const getAllPublications = async (knex, queryParams) => {

	let knexQuery = knex.select(['title', 'DB_id']).from('pub_Publications');
	knexQuery = knexQuery.orderBy('title', 'asc');

	if(queryParams.title !== undefined) {
		knexQuery = knexQuery.where('title', 'like', '%' + queryParams.title + '%');
	}

	if(queryParams.search !== undefined) {
		knexQuery = knexQuery
		.where('title', 'like', '%' + queryParams.search + '%');
	}

	const count = await knexQuery.clone().count().then((result) => result[0]['count(*)']);

	if(queryParams.limit !== undefined && queryParams.offset !== undefined) {		
		knexQuery = knexQuery.limit(parseInt(queryParams.limit)).offset(parseInt(queryParams.offset));		
	}

	return {
		count: count,
		data: await knexQuery
	}
};


/**
 * Get a single publication
 */
const getSinglePublication = async (knex, id) => {
	const core = await knex.select().from('pub_Publications').where({ DB_id: id }).first();
	// play, movie, book, book chapter, journal edition or article
	const play = await knex.select().from('pub_play').where({ publication_id: id }).first();
	const movie = await knex.select().from('pub_movie').where({ publication_id: id }).first();
	const journalEdition = await knex.select().from('pub_journal_edition').where({ publication_id: id }).first();
	const book = await knex.select().from('pub_book').where({ publication_id: id }).first();
	const bookChapter = await knex.select().from('pub_book_chapter').where({ publication_id: id }).first();
	const article = await knex.select().from('pub_article').where({ publication_id: id }).first();

	const authors = await knex.select('col_Authors.*', 'people.title', 'people.firstname', 'people.lastname_keyname').from('col_Authors')
		.where({ publication_id: id })
		.innerJoin('people', 'col_Authors.person_id', 'people.DB_id')

	return { core, play, movie, journalEdition, book, bookChapter, article, authors };
};

/**
 * Get a single person
 */
const getSinglePerson = async (knex, id) => {
	const core = await knex
	.select(['people.*', 
		'alsoKnownAs.DB_id as alt_DB_id',
		'alsoKnownAs.lastname_keyname as alt_lastname_keyname', 
		'alsoKnownAs.firstname as alt_firstname', 
		'alsoKnownAs.title as alt_title'])
	.from('people')
	.leftJoin('people as alsoKnownAs', 'people.is_alternative_name_of', 'alsoKnownAs.DB_id')
	.where({ 'people.DB_id': id })
	.first();
	// play, movie, book, book chapter, journal edition or article
	const works = await knex.select('col_Authors.*', 'pub_Publications.title').from('col_Authors')
	.where({ person_id: id })
	.innerJoin('pub_Publications', 'col_Authors.publication_id', 'pub_Publications.DB_id');

	return { core, works };
}

module.exports = {
	getAllPublications,
	getAllPeople,
	getSinglePublication,
	getSinglePerson,
};
