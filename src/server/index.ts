import './bootstrap';
import 'reflect-metadata';
import { Aplication } from './aplication/core/aplication';

const config = require('../../config');
const app = new Aplication(config);
app.start();
