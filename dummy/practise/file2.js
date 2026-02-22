console.time('starting');


const fs = require('fs');
const { start } = require('repl');

console.time('file read');

fs.readFile('textFile.txt', 'utf-8', (error, content)=>{
        console.log(content);        
    })

console.timeEnd('file read');

console.time('file read sync');

fs.readFile('b.txt', 'utf-8', ( error, content) => {
    console.log(content);
})

console.timeEnd('file read sync');

console.timeEnd('starting');

