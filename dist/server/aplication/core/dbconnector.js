"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dbconnector {
    constructor(config) {
        this.config = config;
    }
    createDbConnection() {
        // createConnection(this.config).then(connection => {
        //     console.log('connection to DB success');
        // }).catch(error => console.log(error));
    }
}
exports.Dbconnector = Dbconnector;
