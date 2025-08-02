// Find the union of two arrays

// Input:
// let nums1 = [1, 2, 3, 4, 5]
// let nums2 = [1, 2, 3]
// Output:  [1, 2, 3, 4, 5]

// let a1 = [1, 2, 3, 4, 5];
// let a2 = [1, 2, 3, 6, 7];

// let seen = {};
// let result = [];
// let k = 0;

// for (let i = 0; i < a1.length; i++) {
//   if (!seen[a1[i]]) {
//     seen[a1[i]] = true;
//     result[k] = a1[i];
//     k++;
//   }
// }

// for (let j = 0; j < a2.length; j++) {
//   if (!seen[a2[j]]) {
//     seen[a2[j]] = true;
//     result[k] = a2[j];
//     k++;
//   }
// }

// console.log(result);

// Reverse an array

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// revArray = [8,7,6,5,4,3,2,1]
// let i = 0;
// let j = arr.length - 1;

// while (i < j) {
//   [arr[i], arr[j]] = [arr[j], arr[i]];
//   i++;
//   j--;
// }
// console.log(arr);

// Remove duplicates from a sorted array

// let arr = [1, 2, 3, 4, 4, 5, 6, 6, 7, 5];
// let output = [];
// let j = 0;
// let map = new Map();

// for (let i = 0; i < arr.length; i++) {
//   if (!map.has(arr[i])) {
//     output[j] = arr[i];
//     map.set(arr[i], true);
//     j++;
//   }
//   console.log(map);
// }
// console.log(output);

// let index = 0;
// let seen = {};

// for (let i = 0; i < arr.length; i++) {
//   if (!seen[arr[i]]) {
//     seen[arr[i]] = true;
//     arr[index] = arr[i];
//     index++;
//   }
// }

// arr.length = index;

// console.log(arr);

// Move all zeros to the end of the array

// let arr = [0, 1, 0, 3, 12];
// Output:        [1, 3, 12, 0, 0]
// let index = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== 0) {
//     arr[index] = arr[i];
//     index++;
//   }
// }

// for (let j = index; j < arr.length; j++) {
//   arr[j] = 0;
// }

// console.log(arr);

// Find the maximum and minimum element in an array
// let arr = [2, 3, 1, 5, 3, 6, 6, 0, 10];

// let max = arr[0];
// let min = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }

// console.log({ min, max });

// Left rotate an array by one place

// let arr = [1, 2, 3, 4, 5];
// let k = 2;
// // let output = [2, 3, 4, 5, 1]

// function reverse(arr, start, end) {
//   while (start < end) {
//     [arr[start], arr[end]] = [arr[end], arr[start]];
//     start++;
//     end--;
//   }
// }

// function leftRotate(arr, k) {
//   k = k % arr.length;
//   reverse(arr, 0, k - 1);
//   reverse(arr, k, arr.length - 1);
//   reverse(arr, 0, arr.length - 1);
// }

// leftRotate(arr, k);

// console.log(arr);

// Find the "Kth" smallest element in the array

// let arr = [3, 2, 4, 7, 5, 6, 1];

// for (let i = 1; i < arr.length; i++) {
//   let map = new Map();
//   let kthSmallestElement = arr[0];
//   if (arr[i] < kthSmallestElement) {
//     map.set(arr[i], 1);
//     map.set;
//   }
// }

// Find the intersection of two arrays

// let nums1 = [1, 2, 2, 1, 3, 5];
// let nums2 = [2, 2, 1, 3, 4];
// let output = [];
// let k = 0;
// const seen = {};
// for (let i = 0; i < nums1.length; i++) {
//   if (!seen[nums1[i]]) {
//     seen[nums1[i]] = true;
//   }
// }
// for (let j = 0; j < nums2.length; j++) {
//   if (seen[nums2[j]]) {
//     seen[nums2[j]] = false;
//     output[k] = nums2[j];
//     k++;
//   }
// }

// console.log(output);

// For an array of integers nums, an identical twin is defined as pair (i, j) where nums[i] is equal to nums[j] and i < j.

// Array: [1, 2, 3, 2, 1]
// Number of Identical Twins: 2
// Explanation:
// Identical Twins: [[1, 1], [2, 2]]
// Indexes: (0, 4), (1, 3)

// let arr = [1, 2, 3, 2, 1];
// let map = new Map();
// let output = [];
// let indexes = [];
// let j = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (map.has(arr[i]) && map.get(arr[i]) !== i) {
//     output[j] = [arr[i], arr[i]];
//     indexes[j] = [map.get(arr[i]), i];
//     j++;
//   } else {
//     map.set(arr[i], i);
//   }
// }

// console.log({ output, indexes });

// Print the frequency of each element in an array

// let arr = [3, 2, 4, 7, 5, 5, 1];
// let seen = {};

// for (let i = 0; i < arr.length; i++) {
//   if (!seen[arr[i]]) {
//     seen[arr[i]] = 1;
//   } else {
//     seen[arr[i]] = seen[arr[i]] + 1;
//   }
// }

// console.log(seen);

// for (let [key, value] in seen) {
//   console.log(`${key}->${seen[key]} times`);
// }
