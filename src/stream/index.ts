
import * as fs from 'fs';
import * as zlib from 'zlib';

const file = process.argv[2];
//only files < 1gb
// fs.readFile(file, (err, buffer) => {
//   zlib.gzip(buffer, (err, buffer) => {
//     fs.writeFile(file + '.gz', buffer, err => {
//       console.log('File successfully compressed');
//     });
//   });
// });

//any size
fs.createReadStream(file)
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream(file + '.gz'))
    .on('finish', () => console.log('File successfully compressed'));
