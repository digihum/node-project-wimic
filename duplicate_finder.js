const http = require('http');
const _ = require('lodash');
const Knex = require('knex');

const api = require('./api');

// connect to database
const knexConfig = {
	client: 'sqlite3',
	connection: {
	  filename: "./irish-writers.sqlite"
	},
	useNullAsDefault: true,
	databaseConnection: {
		pool: {
		    afterCreate: (conn, cb) => {
		      conn.run('PRAGMA foreign_keys = ON', cb);
		    }
		}
	}
};

const knex = Knex(knexConfig);


const findDuplicatePeople = async () => {

	const allPeople = (await api.getAllPeople(knex, {})).data;

	const alreadyFound = new Map();

	for (let i=0; i<allPeople.length; i++) {
		const id = allPeople[i].DB_id;
		const personData = await api.getSinglePerson(knex, id);
		//console.log(id, i, personData.core);
		const noId = _.omit(personData.core, 'DB_id');

		const stringified = JSON.stringify(noId);

		const duplicate = alreadyFound.has(stringified);

		if (!duplicate) {
			alreadyFound.set(stringified, id);			
		} else {
			await knex('col_Authors')
			.where('person_id', '=', id)
			.update({
				'person_id': alreadyFound.get(stringified)
			});

			await knex('col_Authors')
			.del()
			.where('person_id', '=', id)

			await knex('people')
			.del()
			.where('DB_id', '=', id)


			console.log('found duplicate', noId['lastname_keyname'], id, alreadyFound.get(stringified));
		}
	}

	console.log("People: ", allPeople.length, alreadyFound.size)

};

const findDuplicatePublications = async () => {

	const allPublications = (await api.getAllPublications(knex, {})).data;

	const alreadyFound = new Map();

	for (let i=0; i<allPublications.length; i++) {
		const id = allPublications[i].DB_id;
		const personData = await api.getSinglePublication(knex, id);
		//console.log(id, i, personData.core);
		const noId = _.omit(personData.core, 'DB_id');

		const stringified = JSON.stringify(noId);

		const duplicate = alreadyFound.has(stringified);

		if (!duplicate) {
			alreadyFound.set(stringified, id);			
		} else {
			await knex('col_Authors')
			.where('publication_id', '=', id)
			.update({
				'publication_id': alreadyFound.get(stringified)
			});

			await knex('col_Authors')
			.del()
			.where('publication_id', '=', id)

			await knex('pub_Publications')
			.del()
			.where('DB_id', '=', id)


			console.log('found duplicate', noId['title'], id, alreadyFound.get(stringified));
		}
	}

	console.log("Publications: ", allPublications.length, alreadyFound.size)

};


findDuplicatePeople()
.then(findDuplicatePublications)
.then(() => process.exit(0))
