const fs = require('fs');

function print(err, data){
    console.log(data);
}

fs.readFile('textFile.txt', 'utf-8', print);

fs.readFile('b.txt', 'utf-8', print);

setTimeout(() => {
    console.log('This is setTimeout');
}, 0);


