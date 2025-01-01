"use strict";
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAge({ name: 'Jiro', age: 78 }, { name: 'Ben', age: 45 });
console.log(age);
