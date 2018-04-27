import "reflect-metadata";
import { Aplication } from './core/aplication/aplication';
const config = require('../config');
const app = new Aplication(config);
app.start();
