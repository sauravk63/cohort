import {describe, it, expect} from '@jest/globals';
import {Sum, Multiply} from '../index';

describe('Sum', () => {
  it('should return the sum of two numbers', () => {
    expect(Sum(2, 3)).toBe(5);
    expect(Sum(-1, 1)).toBe(0);
    expect(Sum(0, 0)).toBe(0);
  });
});

describe('Test Multiply function' , ()=>{
  it('Should return multiply function results correctly',()=>{
    expect(Multiply(5,9)).toBe(45)
  })
})




