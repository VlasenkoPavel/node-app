"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const aplication_1 = require("./core/aplication/aplication");
const config = require('../config');
const app = new aplication_1.Aplication(config);
app.start();
