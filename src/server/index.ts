import 'bootstrap';
import 'reflect-metadata';
// import { Aplication } from '@core/Application';

// const config = require('../../config');
// const app = new Aplication(config);
let b = 5;
b = b+1;
b = b+1;
b = b+1;

const func = (a: number) => {
    a = a+1;
    a = a+1;
    a = a+1;
}

(() => {
    func(5);
    func(8);
})();

// app.start();
