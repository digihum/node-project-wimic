const Knex = require('knex');

 const old_db = Knex({
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
        filename: 'irishwriters_fixed.sqlite'
    },
    pool: {
        afterCreate: (conn, cb) => {
        conn.run('PRAGMA foreign_keys = ON', cb);
        }
    }
//debug: true
});

const new_db = Knex({
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
        filename: 'mydb.sqlite'
    },
    pool: {
        afterCreate: (conn, cb) => {
        conn.run('PRAGMA foreign_keys = ON', cb);
        }
    }
//debug: true
});


//require('./metadata')(old_db, new_db)
//.then(() => require('./locations')(old_db, new_db))
//.then(() => require('./people')(old_db, new_db))
//.then(() => require('./publications')(old_db, new_db))
require('./locations')(old_db, new_db)
.then(() => process.exit(0));
