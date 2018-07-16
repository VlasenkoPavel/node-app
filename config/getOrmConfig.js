const path = require('path');
const dbConfig = require('./db-config');

const migrationDir = path.join(__dirname, "../", "dist/server/infrastructure/db-models");

const ormConfig = {
    ...dbConfig,
    mirations: [migrationDir]
}

process.stdout.write(JSON.stringify(ormConfig));
