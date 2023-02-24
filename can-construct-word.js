"use strict";

/**
 *
 * Accepts a word string and a letters string.
 * Returns true if word can be constructed with the letters in letters string
 * Otherwise returns false
 *
 */


function canConstructWord(word, letters) {
  const wordFreq = {};
  const letterFreq = {};

  for (const letter of word) {
    const current = wordFreq[letter] || 0;
    wordFreq[letter] = current + 1;
  }

  for (const item of letters) {
    const current = letterFreq[item] || 0;
    letterFreq[item] = current + 1;
  }

  console.log('letterFreq', letterFreq);
  console.log('wordFreq', wordFreq);

  for (const letter in wordFreq) {
    if (letterFreq[letter] === undefined || wordFreq[letter] > letterFreq[letter]) return false;
  }

  return true;

}
