import 'reflect-metadata';
import { DbConnector } from '../core/DbConnector';
import { Connection } from 'typeorm';

const config = require('../../../../config');

export abstract class Load {

    protected connect: Connection;
    private dbConnector: DbConnector = DbConnector.getInstance(config);

    public async init(): Promise<void> {
        await this.dbConnector.connect();
        this.connect = await this.dbConnector.getConnection();
    }

    public async close(): Promise<void> {
        await this.dbConnector.closeConnection();
        console.log('Connection to database are closed');
    }

    public abstract load(): Promise<any>;
}
