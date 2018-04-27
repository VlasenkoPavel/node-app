const fs = require('fs');
const nconf = require('nconf');
const path = require('path');

nconf.argv()
    .env()
    .file({ 
        file: path.join(__dirname, 'config.json')
    });

nconf.set('controllers', path.join(__dirname, '../', 'dist/controllers'));

module.exports = nconf;