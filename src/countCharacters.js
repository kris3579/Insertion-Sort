'use strict';

module.exports = function countCharacters(str) {
  const mappedCharacters = new Map();
  for (let i = 0; i < str.length; i++) {
    (function checkForChar(character, map) {
      if (map.has(character)) {
        let characterCount = map.get(character);
        characterCount += 1;
        map.delete(character);
        map.set(character, characterCount);
      } else {
        map.set(character, 1);
      }
    }(str[i], mappedCharacters));
  }
  return mappedCharacters;
};
