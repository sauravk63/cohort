import express from 'express'

export const app = express()

app.use(express.json())

app.post('/Sum',(req, res)=>{
    const a  = req.body.a
    const b = req.body.b

    res.json({
        "Sum" : a+b
    })
})