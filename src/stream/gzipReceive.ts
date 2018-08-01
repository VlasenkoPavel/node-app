import * as http from 'http';
import * as fs from 'fs';
import * as zlib from 'zlib';

//file in launch folder
const server = http.createServer((req, res) => {
  const filename = req.headers.filename;
  console.log('File request received: ' + filename);
  req
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream(filename as string))
    .on('finish', () => {
      res.writeHead(201, {'Content-Type': 'text/plain'});
      res.end('That\'s it\n');
      console.log(`File saved: ${filename}`);
    });
});

server.listen(3000, () => console.log('Listening'));
