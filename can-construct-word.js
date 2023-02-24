"use strict";

/**
 *
 * Accepts a word string and a letters string.
 * Returns true if word can be constructed with the letters in letters string
 * Otherwise returns false
 *
 */

function freqCounter(str) {
  const counter = {};
  for (const letter of str) {
    const current = counter[letter] || 0;
    counter[letter] = current + 1;
  }
  return counter;
}


function canConstructWord(word, letters) {
  const wordLetterFreq = freqCounter(word);
  const lettersLetterFreq = freqCounter(letters);

  for (const letter in wordLetterFreq) {
    const currWordCnt = wordLetterFreq[letter];
    const currLttrCnt = lettersLetterFreq[letter];
    if (currLttrCnt === undefined || currWordCnt > currLttrCnt) return false;
  }

  return true;

}
