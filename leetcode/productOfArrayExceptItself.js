1;
// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

let arr = [1, 2, 3, 4];
//  [ 1, 1, 2, 6 ]
let productArray = [];

const productOfArrayExceptItself = (arr) => {
  let prefix = 1;
  let postfix = 1;
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      productArray[i] = prefix * 1;
    } else if (i > 0) {
      productArray[i] = prefix * arr[i - 1];
      prefix = productArray[i];
    }
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    if (i === arr.length - 1) {
      productArray[i] = postfix * productArray[i];
    } else if (i < arr.length - 1) {
      postfix = postfix * arr[i + 1];
      productArray[i] = postfix * productArray[i];
    }
  }
  return productArray;
};

const result = productOfArrayExceptItself(arr);
console.log({ result });
