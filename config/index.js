const fs = require('fs');
const nconf = require('nconf');
const path = require('path');

nconf.argv()
    .env()
    .file({ 
        file: path.join(__dirname, 'config.json')
    });

nconf.set('controllers', path.join(__dirname, '../', 'dist/server/aplication/controllers'));
const entities = path.join(__dirname, "../", "dist/server/infrastructure/db-models");
// nconf.set('dbconfig', `{
//     "type": "postgres",
//     "host": "localhost",
//     "username": "admin",
//     "password": "123qwe",
//     "database": "node_react_app_db",
//     "entities": [
//         "${entities}"
//     ],
//     "synchronize": true,
//     "logging": false
// }`);

module.exports = nconf;