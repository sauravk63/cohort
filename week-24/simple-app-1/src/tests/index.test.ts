import {describe, test, expect, it} from '@jest/globals';
import { multiply, sum } from '..';

describe('To test sum function', () => {
    it('should add two numbers', () =>{
        const finalAnswer = sum(2,3);
        expect(finalAnswer).toBe(5);
    })

    it('should add sum of two negative numbers', () =>{
        const finalAnswer = sum(-2,-3);
        expect(finalAnswer).toBe(-5);
    })
})

describe('To test multiply function', () => {
    it('should multiply two numbers', () =>{
        const finalAnswer = multiply(2,3);
        expect(finalAnswer).toBe(6);
    })

    
})
