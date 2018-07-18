import 'reflect-metadata';
import { DbConnector } from '../server/application/core/DbConnector';
import { Connection } from 'typeorm';

const config = require('../../config');

export abstract class Load {

    protected connect: Connection;
    private dbConnector: DbConnector = DbConnector.getInstance(config.get('dbconfig'));

    public async init(): Promise<void> {
        await this.dbConnector.connect();
    }

    public async close(): Promise<void> {
        await this.dbConnector.closeConnection();
        console.log('Connection to database are closed');
    }

    public abstract load(): Promise<any>;
}
