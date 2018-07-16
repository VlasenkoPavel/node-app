import 'reflect-metadata';
import 'source-map-support/register';

const tsConfig = require('../../tsconfig.json');
const tsConfigPaths = require('tsconfig-paths');

/* Path mapping init, must be before import app files */
tsConfigPaths.register({
    baseUrl: __dirname,
    paths: tsConfig.compilerOptions.paths
});
