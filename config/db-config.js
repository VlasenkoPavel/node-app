const path = require('path');

const entitiesDir = path.join(__dirname, "../", "dist/server/infrastructure/db-models/*.js");
let database = 'real-db'

if (process.env.NA_ENV === 'test') { database = "test-db" };

const dbConfig = {
    type: 'postgres',
    host: 'localhost',
    password: '123qwe',
    username: 'admin',
    entities: [entitiesDir],
    synchronize: true,
    logging: false,
    database
}

module.exports = dbConfig;
