// // var f =;
// // var sayHello = 'Hello';

// // console.log(sayHello);

// const msg = require('./logger');

// // msg =1;

// // msg.log('Saurav');

// msg('Saurav')

//Path Module

/***

const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);

***/


const os = require('os');

var freeMemory = os.freemem();

var totalMemory = os.totalmem();

var hostName = os.hostname()

var arch = os.arch();

var netwrkI = os.networkInterfaces();

console.log(`Total Memory : ${totalMemory/1024} KB`);
console.log(`Free Memory : ${freeMemory/1024} KB`);
console.log(`HostName : ${hostName} `);
console.log(`Arch : ${arch} `);
console.table(`netwrkI : ${netwrkI.lo[0].cidr} `);





// FileSystem Module

// const fs = require('fs');

// // var files = fs.readdirSync('./');

// // console.log(files);

// fs.readdir('$', function(err, result){
//     if(err) console.log('ERROR!', err);
//     else console.log('Result', result);
// })
