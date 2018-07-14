import { createConnection, ConnectionOptions } from 'typeorm';

class Dbconnector {

    private config: ConnectionOptions;

    constructor(config: ConnectionOptions) {
        this.config = config;
    }

    public createDbConnection() {
        // createConnection(this.config).then(connection => {
        //     console.log('connection to DB success');
        // }).catch(error => console.log(error));
    }
}
export { Dbconnector };
