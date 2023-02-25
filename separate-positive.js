"use strict";
/**
 * 
 *returns array with negative numbers on the left and pos on the right
 */
function separatePositive(nums) {
    

    let lastPositiveIndex = -1;
    for(let i=0; i<nums.length; i++){
        if(nums[i]>0){
            lastPositiveIndex++;

        
        if(i!==lastPositiveIndex){
            let temp = nums[i];
            nums[i] = nums[lastPositiveIndex];
            nums[lastPositiveIndex] = temp;
        }
        }
    }
    return nums;


}
