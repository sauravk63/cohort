// function greet(firstName : string){
//     console.log(`hello, ${firstName.toLowerCase()}`);
// }

// greet('SAURAV');

// function Sum(a:number, b:number){
    
//     console.log(a+b);
    
//     return 'success';
// }

// const s = Sum(9+8,8-2);

// console.log(s);

// function b(a : Function){
//     setTimeout(a, 1000);
// }

// function a(){
//     console.log('hello there');   
// }

// b(a);

// interface User {
//     firstName : string,
//     lastName : string,
//     age : number,
//     email ?: string
// }

// const user = {
//     firstName : 'saurav',
//     lastName : 'sharma',
//     age : 22,
// }

// function isLegal(user : User){
//     return user.age > 18 ? true : false;
// }

// console.log((isLegal(user)))

// type Input = (number | string);

function firstEl<F>(arr : F[] ) {
    return arr[0];
}

console.log(firstEl(['saurav', 'sharma',]).toUpperCase());
console.log(firstEl([1,3,4,5,6,9, 'errerre', true]))
