// Find the union of two arrays

// Input:
// let nums1 = [1, 2, 3, 4, 5, 2];
// let nums2 = [1, 2, 3, 6, 7];
// Output:  [1, 2, 3, 4, 5]

// const unionOfArrays = (nums1, nums2) => {
//   let output = [];
//   let j = 0;
//   let set = new Set();
//   for (let i = 0; i < nums1.length; i++) {
//     set[nums1[i]] = true;
//     output[j] = nums1[i];
//     j++;
//   }
//   for (let i = 0; i < nums2.length; i++) {
//     if (!set[nums2[i]]) {
//       output[j] = nums2[i];
//       j++;
//     }
//   }
//   return output;
// };

// console.log(unionOfArrays(nums1, nums2));

// Reverse an array

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// revArray = [8,7,6,5,4,3,2,1]

// const revArray = function (arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     [arr[left], arr[right]] = [arr[right], arr[left]];
//     left++;
//     right--;
//   }
//   return arr;
// };

// console.log(revArray(arr));

// Remove duplicates from a sorted array

// let arr = [1, 2, 3, 4, 4, 5, 6, 6, 7];

// const removeDuplicates = function (arr) {
//   let set = new Set();
//   let j = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (!set[arr[i]]) {
//       set[arr[i]] = true;
//       arr[j] = arr[i];
//       j++;
//     }
//   }
//   arr.length = j;
//   return arr;
// };
// console.log(removeDuplicates(arr));

// Move all zeros to the end of the array

// let arr = [0, 1, 0, 0, 3, 12];
// // Output:        [1, 3, 12, 0, 0]

// const moveZero = function (arr) {
//   let j = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       arr[j] = arr[i];
//       j++;
//     }
//   }
//   for (let i = j; i < arr.length; i++) {
//     arr[i] = 0;
//   }
//   return arr;
// };

// console.log(moveZero(arr));

// Find the maximum and minimum element in an array
// let arr = [2, 3, -1, 5, 3, 6, -6];

// let max = arr[0];
// let min = arr[0];

// const findMinMax = function (arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min && arr[i] > 0) {
//       min = arr[i];
//     } else if (arr[i] > max) {
//       max = arr[i];
//     }
//   }

//   return { min, max };
// };

// console.log(findMinMax(arr));

// Reverse a number
// Input: 1234
// Output: 4321

// let digit = 1234;

// const reverseValue = function (num) {
//   let revDigit = 0;
//   while (num > 0) {
//     let rem = num % 10;
//     revDigit = revDigit * 10 + rem;
//     num = Math.floor(num / 10);
//   }
//   return revDigit;
// };

// console.log(reverseValue(digit));

// Prime number

// let num = 13;

// const checkPrime = function (num) {
//   for (let i = 2; i < Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//     return true;
//   }
// };

// console.log(checkPrime(num));

// Find all prime numbers up to N (Sieve of Eratosthenes)

// let N = 100;

// const primeNumbers = function (target) {
//   const primeNumbers = [];
//   let k = 0;
//   for (let i = 2; i < target; i++) {
//     let count = 0;
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//       if (i % j === 0) {
//         count++;
//         break;
//       }
//     }
//     if (count === 0) {
//       primeNumbers[k] = i;
//       k++;
//     }
//   }
//   return primeNumbers;
// };

// console.log(primeNumbers(N));

//  Check if a number is an Armstrong number

// Input: 153
// Output: true
// let num = 154;
// const checkArmstrong = function (num) {
//   let armNum = 0;
//   let originalNum = num;
//   while (num > 0) {
//     let rem = num % 10;
//     armNum += rem ** 3;
//     num = Math.floor(num / 10);
//   }
//   if (originalNum === armNum) {
//     return true;
//   }
//   return false;
// };

// console.log(checkArmstrong(num));

//  Check if a number is a perfect number
// Input: 28

// let num = 27;

// const checkPerfectNum = function (num) {
//   let sum = 1;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) sum += i;
//   }
//   console.log(sum);
//   if (sum === num) return true;
//   return false;
// };
// console.log(checkPerfectNum(num));

// GCD (HCF) of two numbers
// Input: 12, 18
// Output: 6
// let num1 = 20;
// let num2 = 40;

// const GCD = function (num1, num2) {
//   let HCF = 1;
//   for (let i = 2; i < Math.sqrt(Math.max(num1, num2)); i++) {
//     if (num1 % i === 0 && num2 % i === 0) {
//       HCF *= i;
//     }
//   }
//   return HCF;
// };

// console.log(GCD(num1, num2));

// Left rotate an array by one place

// let input = [1, 2, 3, 4, 5];
// const noOfPlace = 2;
// let output = [2, 3, 4, 5, 1]

// function reverse(arr, left, right) {
//   while (left < right) {
//     [arr[left], arr[right]] = [arr[right], arr[left]];
//     left++;
//     right--;
//   }
// }

// const leftRotate = function (arr, noOfPlace) {
//   noOfPlace = noOfPlace % arr.length;
//   reverse(arr, 0, noOfPlace - 1);
//   console.log(arr);
//   reverse(arr, noOfPlace, arr.length - 1);
//   console.log(arr);
//   reverse(arr, 0, arr.length - 1);
//   return arr;
// };

// const rightRotate = function (arr, noOfPlace) {
//   let k = noOfPlace % arr.length;
//   reverse(arr, arr.length - k, arr.length - 1);
//   console.log(arr);
//   reverse(arr, 0, arr.length - 1 - k);
//   console.log(arr);
//   reverse(arr, 0, arr.length - 1);
//   return arr;
// };

// console.log(rightRotate(input, noOfPlace));

// Find the "Kth" smallest element in the array

// let arr = [3, 2, 4, 7, 5, 6, 1];

// const kthSmallestElement = function (arr, k) {
//   const sortedArray = arr.sort((a, b) => {
//     return a - b;
//   });
//   return arr[k - 1];
// };

// console.log(kthSmallestElement(arr, 5));

// Find the intersection of two arrays

// let nums1 = [1, 2, 2, 1];
// let nums2 = [2, 2, 3, 1];
// // Output:  [2]

// const intersectionArray = function (nums1, nums2) {
//   let set = new Set();
//   let output = [];
//   let j = 0;
//   for (let i = 0; i < nums1.length; i++) {
//     if (!set[nums1[i]]) {
//       set[nums1[i]] = true;
//     }
//   }
//   console.log(set);
//   for (let i = 0; i < nums1.length; i++) {
//     if (set[nums2[i]]) {
//       output[j] = nums2[i];
//       set[nums2[i]] = false;
//       j++;
//     }
//   }
//   return output;
// };

// console.log(intersectionArray(nums1, nums2));

// For an array of integers nums, an identical twin is defined as pair (i, j) where nums[i] is equal to nums[j] and i < j.

// Array: [1, 2, 3, 2, 1]
// Number of Identical Twins: 2
// Explanation:
// Identical Twins: [[1, 1], [2, 2]]
// Indexes: (0, 4), (1, 3)

// let arr = [1, 2, 3, 2, 1];

// const identicalTwins = function (arr) {
//   let map = new Map();
//   let identical = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!map.has(arr[i])) {
//       map.set(arr[i], i);
//     }
//     if (i > map.get(arr[i])) identical.push([map.get(arr[i]), i]);
//   }
//   return identical;
// };

// console.log(identicalTwins(arr));

// Print the frequency of each element in an array

// let arr = [1, 1, 2, 1, 1, 1, 1, 1];

// const frequency = function (arr) {
//   const map = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     map.set(arr[i], (map.get(arr[i]) || 0) + 1);
//   }
//   return map;
// };

// const result = frequency(arr);

// for (let [key, value] of result) {
//   console.log(`${key}->${value}`);
// }

// The cumulative sum of an array at index i is defined as the sum of all elements of the array from index 0 to index i.

// Initial Array: [1, 2, 3, 4]
// Cumulative Sum: [1, 3, 6, 10]

// Initial Array: [1, 1, 1, 1, 1]
// Cumulative Sum: [1, 2, 3, 4, 5]

// let arr = [1, 1, 1, 1, 1];
// let cumulativeSumArray = [];

// const cumulativeArray = function (arr) {
//   for (let i = 1; i < arr.length; i++) {
//     arr[i] = arr[i - 1] + arr[i];
//   }
//   return arr;
// };

// console.log(cumulativeArray(arr));

// Check if an array is sorted

// let arr = [1, 2, 5, 4, 5, 6, 7, 8];

// const checkSortedArray = function (arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i - 1] > arr[i]) return false;
//   }
//   return true;
// };

// console.log(checkSortedArray(arr));

// Check if a string is a palindrome

// let s = "ababab";

// const checkPalindrom = function (s) {
//   let revStr = "";
//   for (let i = 0; i < s.length; i++) {
//     revStr = s[i] + revStr;
//   }
//   if (s === revStr) return true;
//   return false;
// };

// console.log(checkPalindrom(s));

// Check if two strings are anagrams of each other

// Input: s = "anagram", t = "nagaram"
// Output: true

// let s = "anagramam";
// let t = "nagaramma";

// const checkAnagramString = function (s, t) {
//   if (s.length !== t.length) return false;
//   let map = new Map();
//   for (let i = 0; i < s.length; i++) {
//     map.set(s[i], (map.get(s[i]) || 0) + 1);
//   }
//   console.log(map);
//   for (let i = 0; i < t.length; i++) {
//     if (!map.has(t[i]) || map.get(t[i]) === 0) return false;
//     map.set(t[i], map.get(t[i]) - 1);
//   }
//   return true;
// };

// console.log(checkAnagramString(s, t));
