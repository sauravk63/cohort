
// Print a timer in terminal window

// let HH = 0;
// let MM = 0;
// let SS = 0;

// setInterval(printTime, 1);


// function printTime(){
//     if(SS>58){
//         SS=0;
//         if(MM>58){
//             MM=0;
//             if(HH>=23){
//                 HH=0;
//             }else HH++;
//         }else MM++;
//     }else SS++;
//     console.log(HH+':'+MM+':'+SS);
// }

// const users = '{"name" : "saurav","age" : 24,"gender" : "male"}';

// let str = JSON.parse(users);

// console.log(JSON.stringify(str))

// function square(n){
//     return n*n;
// }

// function cube(n){
//     return n*n*n;
// }

// function sumOfSomething(a,b, callback){
//     console.log(callback)
//     const val1 = callback(a,b);
//     const val2 = callback(a,b);
//     return val1+val2;
// }


// //anonymous function
// const res = sumOfSomething(5,6,function (n){
//     return n*n*n;
// });

// console.log(res)

//Sync and Async functions

//SetTimeout, fetch, fs.readFile are all async function

//created Async function

// const fs = require('fs');

// function readAFile(cb){
//     fs.readFile("a.txt",'utf-8',function(err, data){
//         cb(data);
//     });
// }

// function OnDone(data){
//     console.log(data);
// }

// readAFile(OnDone);

//Promises

// const fs = require('fs');

// function readAFile(){
//     return new Promise(function(resolve){
//         fs.readFile("a.txt",'utf-8',function(err, data){
//             resolve(data);
//         })
//     })
// }

// function OnDone(data){
//     console.log(data);
// }

// readAFile().then(OnDone);

// const p = new Promise(function(resolve){
//     resolve("hello there");
// });

// p.then(function(){
//     console.log(p)
// })

console.log('🍕 Synchronous 1 ');

setTimeout(_ => console.log('🍟 Timeout 2'), 0);

Promise.resolve().then(_ => console.log('🥓 Promise 3'));

console.log('🎈 Synchronous 4')