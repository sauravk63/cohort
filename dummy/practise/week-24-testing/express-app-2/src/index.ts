import express from 'express';

export const app = express()

app.use(express.json())

app.post('/sum', (req, res)=>{
    const a = Number(req.body.a);
    const b = Number(req.body.b);

    res.send({"Sum" : a+b});
})
