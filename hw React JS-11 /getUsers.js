// 'use strict';
// const request = require('request');

// const getUsers= (from, to) => {

//     let users = [];

//     const getUsersPromiseArr = (from, to) => {
//         let userPromiseArr = [];

//         for(let i = from; i <= to; i++) {
//             let userPromise = new Promise((resolve, reject) => {
//                 request(`https://jsonplaceholder.typicode.com/users/${i}`, (err, res, body) => {
//                     if (err) {
//                         reject(err);        
//                     } else {
//                         resolve(body);
//                     }
//                 });

//             });

//             userPromiseArr.push(userPromise.then(
//                 res => res,
//                 err => {
//                     console.log('err');
//                     throw new Error(err);
//                 }
//             ))
//         }

//         return userPromiseArr
//     }

//     Promise.all(getUsersPromiseArr(from, to)).then(usersRes => { 
//         usersRes.forEach(user => users.push(JSON.parse(user)));
//         console.log(users);
//     });
// }      

// getUsers(process.env.FROM, process.env.TO);