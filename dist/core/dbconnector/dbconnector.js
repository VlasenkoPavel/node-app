"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
class Dbconnector {
    constructor(config) {
        this.config = config;
    }
    createDbConnection() {
        typeorm_1.createConnection(this.config).then(connection => {
            console.log('connection to DB success');
        }).catch(error => console.log(error));
    }
}
exports.Dbconnector = Dbconnector;
