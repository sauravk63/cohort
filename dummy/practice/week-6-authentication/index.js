const express = require('express');
const cors = require('cors')

const app = express();

app.use(express.json())
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
}));


app.get('/signup', (req, res)=>{
    res.send('Hello this is a SIGNUP page')
})


const users = []

app.post('/signup', (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    users.push({
        username : username,
        password : password,
    })

    console.log("Number of users::", users.length);
    

    res.json({
        message: "User has been signed up",
        confirmedUsers: users
    })

})

app.post('/signin', (req, res)=>{

})

app.listen(3000,'0.0.0.0',()=>{
    console.log("Listening at port 3000")
})