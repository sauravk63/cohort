const express = require('express');

const app = express();


let requestCount = 0;


function requestHandler(req, res, next){
    console.log('Method : ', req.method);
    console.log('Hostname : ', req.hostname);
    console.log('URL : ', req.url);
    requestCount++;
    next();  
}

app.get('/admin', (req, res)=>{
    res.send({
        msg : 'Total request count is :' + requestCount
    })
})

app.use(requestHandler);

app.post('/div', (req, res)=>{
    const a = parseInt(req.headers.a);
    const b = parseInt(req.headers.b);
    res.send({
        ans : a + b
    })
})

app.get('/sum', sumRequestHandler);

app.get('/sub', subRequestHandler);

app.get('/mul', mulRequestHandler);

app.get('/div', divRequestHandler);

function sumRequestHandler(req, res){

    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.send({
        ans : a + b,
        requestCount:requestCount
    })

}

function subRequestHandler(req, res){
    
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.send({
        ans : a - b,
        requestCount : requestCount
    })
}

function mulRequestHandler(req, res){
    
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.send({
        ans : a * b,
        requestCount: requestCount
    })
}

function divRequestHandler(req, res){
    
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.send({
        ans : (a / b).toFixed(3),
        requestCount:requestCount
    })
}

app.get('*', (req, res)=>{
    res.send({
        msg : 'This is a forbidden path.'
    })
})

app.listen(4004)