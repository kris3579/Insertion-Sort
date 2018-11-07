'use strict';

module.exports = function insertionSort(array) {
  let savedValue = null;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] < array[j]) {
        savedValue = array[j];
        array[j] = array[i];
        array[i] = savedValue;
      }
    }
  }
  return array;
};
