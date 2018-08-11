import * as Chance from 'chance';
import * as http from 'http';

const chance = new Chance();

//v1
// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });

//     while(chance.bool({ likelihood: 95 })) {
//         res.write(chance.string() + '\n');
//     }

//     res.end('\nThe end...\n');
//     res.on('finish', () => console.log('All data was sent'));

// }).listen(8080, () => console.log('Listening on http://localhost:8080'));

//v2
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    function generateMore() {
        while(chance.bool({likelihood: 95})) {
                const shouldContinue = res.write(chance.string({length: (16 * 1024) - 1})
            );

            if (!shouldContinue) {
                console.log('Backpressure');
                return res.once('drain', generateMore);
            }
        }

        res.end('\nThe end...\n',() => console.log('All data was sent'));
    }

    generateMore();

}).listen(8080, () => console.log('Listening on http://localhost:8080'));
