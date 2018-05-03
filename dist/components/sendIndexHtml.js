"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const INDEX_HTML_PATH = path.join(__dirname, '../../public/index.html');
class SendIndehHtml {
    use(request, response, next) {
        let a = 1;
        if (a === 1) {
            response.sendFile(INDEX_HTML_PATH);
            return response;
        }
        else {
            return next();
        }
    }
}
exports.SendIndehHtml = SendIndehHtml;
