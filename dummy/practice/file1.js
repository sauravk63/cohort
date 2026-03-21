function allNumbers(){
    console.log('start');
    printNumbers(4)
    console.log('end'); 
}

const printNumbers = (num) => {
    for (let index = 0; index < num ; index+=2) {
    console.log(index);    
    }
}

function runInfiniteLoop(){
    while(true){
        console.log('infinite loop');
    }
    }
// runInfiniteLoop()
// allNumbers();

console.log(process.argv[3]);
