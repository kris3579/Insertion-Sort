'use strict';

const insertionSort = require('../insertionSort');

const testArray = [4, 3, 2, 1];

describe('graphBFS.js', () => {
  test('Success, returned a properly sorted array', () => {
    const result = insertionSort(testArray);
    expect(result).toEqual([1, 2, 3, 4]);
  });
});
