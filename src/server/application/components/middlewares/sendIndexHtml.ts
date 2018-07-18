import { ExpressMiddlewareInterface } from 'routing-controllers';
import * as path from 'path';

const INDEX_HTML_PATH = path.join(__dirname, '../../../../../public/index.html');

export class SendIndexHtml implements ExpressMiddlewareInterface {
    public use(request: any, response: any, next?: (err?: any) => any): any {
        const a = 1;
        if (a === 1) {
            response.sendFile(INDEX_HTML_PATH);
            return response;
        } else {
            return next();
        }
    }
}
