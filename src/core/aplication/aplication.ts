import * as express from 'express';
import { createExpressServer } from "routing-controllers";

const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const debug = require('debug')('nodeapp:server');
const http = require('http');

import { logger as log } from '../libs/log';
import { Dbconnector } from '../dbconnector/dbconnector';

class Aplication {
    private app: express.Application;
    private config: any;

    constructor(config: any) {
        this.config = config;
        const controllersDir = this.config.get('controllers');
        this.app = createExpressServer({
            controllers: [`${controllersDir}/*.js`]
         });

        this.config = config;
        this.init();
    }

    private init() {
        this.app.use(logger('dev'));
        this.app.use(express.static(path.join(__dirname, '../public')));
    }

    public start() {

        const port = this.config.get('port');

        const dbconnector = new Dbconnector(this.config.get('dbconfig'));
        dbconnector.createDbConnection();

        this.app.listen(port, log.info(`server satarted on port ${port}`));
    }

    private onError(error: any) {
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

export { Aplication };
