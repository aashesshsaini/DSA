// Given an integer array nums, find a subarray that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

let arr = [-2, 0, -1];

const maximumSubArray = (arr) => {
  let min = arr[0];
  let max = arr[0];
  let currentMax = arr[0];
  for (let i = 1; i < arr.length; i++) {
    max = Math.max(arr[i], Math.max(arr[i] * min, arr[i] * max));
    min = Math.min(arr[i], Math.min(arr[i] * min, arr[i] * max));
    currentMax = Math.max(currentMax, max);
  }
  return currentMax;
};

const result = maximumSubArray(arr);
console.log({ result });
