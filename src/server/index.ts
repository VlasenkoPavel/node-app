import './bootstrap';
import 'reflect-metadata';
import { Aplication } from '@core/Application';

const config = require('../../config');
const app = new Aplication(config);
app.start();
