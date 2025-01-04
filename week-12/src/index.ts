interface User {
    name : string;
    age : number;
    number : number;
    email : string;
    password : string;
}

function sumOfAge(user1 : User, user2 : User){
    return user1.age + user2.age;
}

type updateProps = Pick<User, 'name' | 'age' | 'number'> //Pick

type updatePropsPartially = Partial<updateProps>

function fetchData(updateProps : updatePropsPartially){}

fetchData({
    name : 'aura',
    age : 12
})