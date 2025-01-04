import {describe, expect, it} from '@jest/globals';
import request from 'supertest';
import { app } from '..';

describe('Test POST /sum ', ()=>{
    it('should add two numbers', async ()=>{
        const result = await request(app).post('/sum').send({
            a : 1,
            b : 4
        });

    
        expect(result.statusCode).toBe(200);
        expect(result.body.answer).toBe(5);
    })
})