// import {describe, expect, it} from '@jest/globals';
// import {app} from '../index'
// import request from 'supertest'

// describe('/POST Sum', ()=>{
//     it('Should return sum of two variables', async ()=>{
//         const res = await request(app).post('/sum').send({
//             a:33,
//             b:32
//         })
//         expect(res.statusCode).toBe(200);
//         expect(res.body.Sum).toBe(65)
//     })
// })


import {describe, expect, it} from '@jest/globals'
import {app} from '../index'
import request from 'supertest'

describe('POST /SUM',()=>{
    it('Should return sum of a & b',async ()=>{
        const res = await request(app).post('/Sum').send({
            a : 22,
            b : 90
        })

        console.log(res);
        

        expect(res.statusCode).toBe(200);
        expect(res.body.Sum).toBe(112)
    })
})