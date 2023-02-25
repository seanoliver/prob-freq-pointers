"use strict";
/**
 * 
 * helper function to create and return object with frequency 
 * of each character in string
 * 
 */
function frequencyCounter(stringNum){
    const freq = {};
    for(const num of stringNum){
        const curr = freq[num] || 0;
        freq[num] = curr + 1;

    }
    return freq;


}
/**
 * 
 * function returns true if both numbers have same frequency of digits
 */
function sameFrequency(num1, num2) {
    
    num1ToString = frequencyCounter(num1.toString());
    num2ToString = frequencyCounter(num2.toString());

    for(let key in num1ToString){
        if(!num2ToString[key]){
            return false;
        }
        if(num1ToString[key]!== num2ToString[key]){
            return false;
        }
    }
    return true;



}
