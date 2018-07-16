const fs = require('fs');
const nconf = require('nconf');
const path = require('path');
const dbconfig = require('./db-config');

nconf.argv()
.env()
    .file({
        file: path.join(__dirname, 'config.json')
    });

const controllerDir = path.join(__dirname, '../', 'dist/server/aplication/controllers')
const entitiesDir = path.join(__dirname, "../", "dist/server/infrastructure/db-models");

nconf.set('controllers', controllerDir);

nconf.set('dbconfig', dbconfig);

module.exports = nconf;
