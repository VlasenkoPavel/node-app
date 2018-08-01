import * as fs from 'fs';
import * as zlib from 'zlib';
import * as http from 'http';
import * as path from 'path';

const file = process.argv[2];
const server = process.argv[3];

const options = {
    hostname: server,
    port: 3000,
    path: '/',
    method: 'PUT',
    headers: {
        filename: path.basename(file),
        'Content-Type': 'application/octet-stream',
        'Content-Encoding': 'gzip'
    }
};

const req = http.request(options, res => {
    console.log('Server response: ' + res.statusCode);
});

fs.createReadStream(file)
    .pipe(zlib.createGzip())
    .pipe(req)
    .on('finish', () => {
        console.log('File successfully sent');
});
