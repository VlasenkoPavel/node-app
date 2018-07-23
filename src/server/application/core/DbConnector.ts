import { createConnection, ConnectionOptions, Connection } from 'typeorm';

export class DbConnector {
    private static instance: DbConnector;
    private connection: Connection;
    private config: ConnectionOptions;

    private constructor(config: ConnectionOptions) {
        this.config = config;
    }

    public static getInstance(config: ConnectionOptions): DbConnector {
        if (!this.instance) {
            this.instance = new DbConnector(config);
        }

        return this.instance;
    }

    public async connect(): Promise<void> {
        return await this.getConnection()
            .then(connection => {
                connection.isConnected
                    ? console.log(`Connection to the database success`)
                    : console.error(`Connection to the database is not established`);
                this.connection = connection;
            })
    }

    public async getConnection(): Promise<Connection> {
        if (!this.connection) {
            this.connection = await createConnection(this.config);
        }
        return this.connection;
    }

    public async closeConnection(): Promise<void> {
        if (this.connection && this.connection.isConnected) {
            this.connection.close();
        }
    }
}

export default DbConnector;
