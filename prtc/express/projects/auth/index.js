const express = require('express');

const app = express();


app.use(express.json());

const users = []


function generateToken(){
    let token = '';
    for(let i = 0; i<8;i++){
        token+=String.fromCharCode(Math.floor(Math.random() * 74 + 42));
    }

    return token;
}


app.get('/', (req, res)=>{
    res.send({
        msg : 'ojjfjefe'
    })
})


app.post('/signup', (req, res)=>{
    const {username, password} = req.body;

    console.log('signup reached');
    

    users.push({
        username : username,
        password : password
    })

    res.send({
        msg : 'signup successful'
    })

    console.log(users);
    
})

app.post('/signin', (req, res)=>{

    
    const {username, password} = req.body;
    
    let foundUser = users.find((u)=>(u.username == username && u.password == password))
    
    if(foundUser){
        const token = generateToken();
        foundUser.token = token;
        res.json({
            token : token
        })
    }
    else{
        res.send({
            msg : "User not found"
        })
        return;
    }

    console.log(users);
})

app.get('/me', (req, res)=>{
    const token = req.headers.token;
    const foundUser = users.find((u)=>u.token === token);
    if(foundUser){
        res.json({
            msg : 'show homepage',
            username : foundUser.username,
            password : foundUser.password
        })
    }else{
        res.status(400).send({
            msg : 'Unauthorized'
        })
    }
})


app.listen(9090);