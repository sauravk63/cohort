const express = require('express');

const app = express();

let requestCount = 0;


function requestHandler(req, res, next){
    requestCount++;
    console.log(requestCount);  
    next();  
}



app.get('/sum', requestHandler, (req, res)=>{

    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.send({
        ans : a + b,
        requestCount:requestCount
    })

})

app.get('/sub', requestHandler, (req, res)=>{
    
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.send({
        ans : a - b,
        requestCount : requestCount
    })
})

app.get('/mul', requestHandler, (req, res)=>{
    
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.send({
        ans : a * b,
        requestCount: requestCount
    })
})

app.get('/div', requestHandler, (req, res)=>{
    
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.send({
        ans : (a / b).toFixed(3),
        requestCount:requestCount
    })
})

app.get('*', (req, res)=>{
    res.send({
        msg : 'This is a forbidden path.'
    })
})

app.listen(4004)