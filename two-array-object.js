"use strict";
/**
 * 
 * function takes two arrays of keys and values
 * build object with keys and values 
 * if there are fewer values then keys, sets values to null
 */
function twoArrayObject(keys, values) {
    let obj = {};
    for(let i=0; i<keys.length; i++){
        if(!values[i]){
            obj[keys[i]] = null;
        }
        else{
            obj[keys[i]] = values[i];
        }
    }
    return obj;

}
