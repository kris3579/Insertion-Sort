'use strict';

const CountCharacters = require('../countCharacters');

const testString = 'tacocat';
const testStringWithCaps = 'tacoCAT';
const testStringWithSpaces = 'tac o cat';
const testEmptyString = '';

describe('countCharacters.js', () => {
  test('Returned map with counted characters, {t: 2, a: 2, c: 2, o: 1}', () => {
    const result = CountCharacters(testString);
    expect(result.get('t')).toEqual(2);
    expect(result.get('a')).toEqual(2);
    expect(result.get('c')).toEqual(2);
    expect(result.get('o')).toEqual(1);
  });
  test('Returned map with counted characters including capitol and non-capitol letters, {t: 1, a: 1, c: 1, o: 1, C: 1, A: 1, T: 1}', () => {
    const result = CountCharacters(testStringWithCaps);
    expect(result.get('t')).toEqual(1);
    expect(result.get('a')).toEqual(1);
    expect(result.get('c')).toEqual(1);
    expect(result.get('o')).toEqual(1);
    expect(result.get('C')).toEqual(1);
    expect(result.get('A')).toEqual(1);
    expect(result.get('T')).toEqual(1);
  });
  test('Returned map with counted characters including spaces, {t: 2, a: 2, c: 2, " ": 2, o: 1}', () => {
    const result = CountCharacters(testStringWithSpaces);
    expect(result.get('t')).toEqual(2);
    expect(result.get('a')).toEqual(2);
    expect(result.get('c')).toEqual(2);
    expect(result.get(' ')).toEqual(2);
    expect(result.get('o')).toEqual(1);
  });
  test('Returned empty map because of empty string', () => {
    const result = CountCharacters(testEmptyString);
    expect(result.size).toEqual(0);
  });
});
