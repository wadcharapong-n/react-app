import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('zero', () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).not.toBeUndefined();

})

test('undefined', () => {
  const z = undefined;
  expect(z).not.toBeNull();
  expect(z).toBeUndefined();
  expect(z).toBeFalsy();
  
}) 

test('number', () => {
  const value = 1+1;
  expect(value).toBe(2);
  expect(value).toBeGreaterThan(1);
  expect(value).toBeGreaterThanOrEqual(2);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(5);
}) 

test('float', () =>{
  const value = 0.1 + 0.2;
  expect(value).toBeCloseTo(0.3);
})

test('string', () =>{
  const value = 'test';
  expect(value).toBe('test');
  expect(value).toEqual('test');
  expect(value).toContain('test');
  expect(value).toMatch(/test/);
})

test('array', () =>{
  const value = [1,2,3,4,5];
  expect(value).toContain(2);
  expect(new Set(value)).toContain(2);
})

test('execption', () =>{
  expect(throwErrorNa).toThrow();
  expect(() => throwErrorNa()).toThrow();
  expect(throwErrorNa).toThrow('This is error');
  expect(throwErrorNa).toThrow(/error/);
})

function throwErrorNa(){
  throw new Error('This is error');
}