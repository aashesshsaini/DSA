// The cumulative sum of an array at index i is defined as the sum of all elements of the array from index 0 to index i.

// Initial Array: [1, 2, 3, 4]
// Cumulative Sum: [1, 3, 6, 10]

// Initial Array: [1, 1, 1, 1, 1]
// Cumulative Sum: [1, 2, 3, 4, 5]

let arr = [1, -1, -1, -1, 1];
let cumulativeSumArray = [];

// const cumulativeSum = (arr) => {
//   let l = arr.length;
//   cumulativeSumArray[0] = arr[0];
//   for (let i = 1; i < l; i++) {
//     cumulativeSumArray[i] = arr[i] + cumulativeSumArray[i - 1];
//   }
//   return cumulativeSumArray;
// };

// const result = cumulativeSum(arr);

// console.log({ result });

const cumulativeSum = (arr) => {
  let l = arr.length;
  for (let i = 1; i < l; i++) {
    arr[i] = arr[i] + arr[i - 1];
  }
  return arr;
};

const result = cumulativeSum(arr);

console.log({ result });
