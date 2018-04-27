"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const routing_controllers_1 = require("routing-controllers");
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const debug = require('debug')('nodeapp:server');
const http = require('http');
const log_1 = require("../libs/log");
const dbconnector_1 = require("../dbconnector/dbconnector");
class Aplication {
    constructor(config) {
        this.config = config;
        const controllersDir = this.config.get('controllers');
        this.app = routing_controllers_1.createExpressServer({
            controllers: [`${controllersDir}/*.js`]
        });
        this.config = config;
        this.init();
    }
    init() {
        this.app.use(logger('dev'));
        this.app.use(express.static(path.join(__dirname, '../public')));
    }
    start() {
        const port = this.config.get('port');
        const dbconnector = new dbconnector_1.Dbconnector(this.config.get('dbconfig'));
        dbconnector.createDbConnection();
        this.app.listen(port, log_1.logger.info(`server satarted on port ${port}`));
    }
    onError(error) {
        if (error.syscall !== 'listen') {
            throw error;
        }
        const bind = 'Port ' + this.config.get('port');
        switch (error.code) {
            case 'EACCES':
                console.error(bind + ' requires elevated privileges');
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.error(bind + ' is already in use');
                process.exit(1);
                break;
            default:
                throw error;
        }
    }
}
exports.Aplication = Aplication;
