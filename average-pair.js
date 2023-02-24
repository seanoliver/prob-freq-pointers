"use strict";

/**
 *
 * Takes a sorted array of numbers and a target average
 * Returns true if a pair of numbers in array equals target average
 * Otherwise returns false
 *
 */

function averagePair(nums, targetAvg) {
  if (nums === []) return false;

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const avg = (nums[left] + nums[right]) / 2;

    if (avg === targetAvg) return true;

    if (avg < targetAvg) {
      left++;
    } else {
      right--;
    }
  }

  return false;

}

