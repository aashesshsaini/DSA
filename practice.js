// Count the digits of a number

// Input: 12345
// Output: 5

let digit = 12345;

// const countDigits = (digit) => {
//   let count = 0;
//   while (digit > 0) {
//     count++;
//     digit = Math.floor(digit / 10);
//   }
//   return count;
// };

// console.log(countDigits(digit));

//  Extract and print each digit

// const extractDigits = (digit) => {
//   while (digit > 0) {
//     let rem = digit % 10;
//     console.log(rem, "digits............");
//     digit = Math.floor(digit / 10);
//   }
//   // return count;
// };

// console.log(extractDigits(digit));

// const reverseDigit = (digit) => {
//   let reverseValue = 0;
//   while (digit > 0) {
//     let rem = digit % 10;
//     reverseValue = reverseValue * 10 + rem;
//     digit = Math.floor(digit / 10);
//   }
//   return reverseValue;
// };

// console.log(reverseDigit(digit));

// Prime number

// let num = 4;

// const checkPrime = (num) => {
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(checkPrime(num));

// Find all prime numbers up to N (Sieve of Eratosthenes)

// let N = 100;

// const primeNumbers = (num) => {
//   for (let i = 2; i <= num; i++) {
//     let count = 0;
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//       if (i % j === 0) {
//         count++;
//       }
//     }
//     if (count === 0) {
//       console.log(i);
//     }
//   }
// };

// primeNumbers(100);

//  Check if a number is an Armstrong number

// Input: 153
// Output: true
// let num = 154;

// const checkArmstrong = (num) => {
//   let armstrongnum = 0;
//   let copy = num;
//   while (num > 0) {
//     let rem = num % 10;
//     armstrongnum = armstrongnum + rem ** 3;
//     num = Math.floor(num / 10);
//   }
//   console.log({ armstrongnum, copy });
//   if (armstrongnum == copy) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(checkArmstrong(num));

//  Check if a number is a perfect number
// Input: 28
// Output: true   // 1+2+4+7+14 = 28

// let num = 28;

// const checkPerfectNumber = (num) => {
//   let digit = 1;
//   for (let i = 2; i <= Math.floor(num / 2); i++) {
//     if (num % i === 0) {
//       digit += i;
//     }
//   }

//   console.log(digit);
//   if (digit === num) {
//     return true;
//   }
//   return false;
// };

// console.log(checkPerfectNumber(num));

// GCD (HCF) of two numbers
// Input: 12, 18    // 2,3,4,6,12   //2,3,6,9,18
// Output: 6
let num1 = 12;
let num2 = 18;

// const HCF = (num1, num2) => {
//   let result = 1;
//   for (
//     let i = 2;
//     i <= Math.max(Math.floor(num1 / 2), Math.floor(num2 / 2));
//     i++
//   ) {
//     if (num1 % i === 0 && num2 % i === 0) {
//       if (i > result) {
//         result = i;
//       }
//     }
//     console.log({ result });
//   }
//   return result;
// };

// console.log(HCF(num1, num2));

// const LCM = (num1, num2) => {
//   let result = 1;
//   for (let i = 2; i < Math.max(num1, num2); i++) {
//     if (num1 % i === 0 && num2 % i === 0) {
//       if (result < i) {
//         result = i;
//       }
//     }
//   }
//   const lcmResult = (num1 * num2) / result;
//   return lcmResult;
// };

// console.log(LCM(num1, num2));

//  Find the factorial of a number

// Input: 5         5*4*3*2 = 120
// Output: 120

let num = 5;

// const factorial = (num) => {
//   if (num === 0 || num === 1) {
//     return 1;
//   }
//   return num * factorial(num - 1);
// };

// const factorial = (num) => {
//   let fact = 1;
//   while (num > 0) {
//     fact = fact * num;
//     num--;
//   }
//   return fact;
// };

// console.log(factorial(3));

1;
// Find the union of two arrays

// Input:
// let nums1 = [1, 2, 3, 4, 5];
// let nums2 = [1, 2, 3];
// Output:  [1, 2, 3, 4, 5]

// const unionOfArrays = (arr1, arr2) => {
//   let set = new Set();
//   let result = [];
//   let j = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     if (!set[arr1[i]]) {
//       set[arr1[i]] = true;
//       result[j] = arr1[i];
//       j++;
//     }
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     if (!set[arr2[i]]) {
//       set[arr2[i]] = true;
//       result[j] = arr2[i];
//       j++;
//     }
//   }
//   console.log(set);
//   return result;
// };

// console.log(unionOfArrays(nums1, nums2));

2;
// Reverse an array

// let arr = [1, 2, 3, 4, 5, 6, 7];

// revArray = [8,7,6,5,4,3,2,1]

// const reverseArray = (arr) => {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     [arr[left], arr[right]] = [arr[right], arr[left]];
//     left++;
//     right--;
//   }
//   return arr;
// };

// console.log(reverseArray(arr));

3;
// Remove duplicates from a sorted array

// let arr = [1, 2, 3, 4, 4, 5, 6, 6, 7];

// this is for only sorted array
// const removeDuplicates = (arr) => {
//   let j = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i - 1]) {
//       arr[j] = arr[i];
//       j++;
//     }
//   }
//   arr.length = j;
//   return arr;
// };

// console.log(removeDuplicates(arr));

// let arr = [1, 2, 3, 4, 5, 6, 6, 7, 4, 5];

// const removeDuplicates = (arr) => {
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

3;
// Move all zeros to the end of the array

// let arr = [0, 1, 0, 3, 12];
// // Output:        [1, 3, 12, 0, 0]

// const moveZero = (arr) => {
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

4;
// Find the maximum and minimum element in an array
// let arr = [2, 3, 1, 5, 3, 6, 6];

// const findMinMax = (arr) => {
//   let min = arr[0];
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     } else if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return { min, max };
// };

// console.log(findMinMax(arr));

5;
// The cumulative sum of an array at index i is defined as the sum of all elements of the array from index 0 to index i.

// Initial Array: [1, 2, 3, 4]
// Cumulative Sum: [1, 3, 6, 10]

// Initial Array: [1, 1, 1, 1, 1]
// Cumulative Sum: [1, 2, 3, 4, 5]

// let arr = [1, 2, 3, 4];

// const cumulativeArray = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     arr[i] = arr[i] + arr[i - 1];
//   }
//   return arr;
// };

// console.log(cumulativeArray(arr));

6;
// Print the frequency of each element in an array

// let arr = [3, 5, 4, 7, 5, 5, 1];

// const frequency = (arr) => {
//   let map = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     if (map.has(arr[i])) {
//       map.set(arr[i], map.get(arr[i]) + 1);
//     } else {
//       map.set(arr[i], 1);
//     }
//   }
//   return map;
// };

// const result = frequency(arr);
// console.log(result);
// for (let [key, value] of result) {
//   console.log(`${key} exist ${value} times`);
// }

7;
// Find the element that appears only once (others appear twice)
// let arr = [3, 5, 4, 7, 3, 5, 5, 1];

// const appearOnce = (arr) => {
//   let set = new Set();
//   for (let i = 0; i < arr.length; i++) {
//     if (set[arr[i]]) {
//       return arr[i];
//     } else {
//       set[arr[i]] = true;
//     }
//   }
// };

// console.log(appearOnce(arr));

8;
// Left rotate an array by one place

// let arr = [1, 2, 3, 4, 5]; // [1,5,4,3,2] // []
// // let output = [2, 3, 4, 5, 1];
// let output = [5, 1, 2, 3, 4];
// let n = 1;
// function reverseArray(arr, start, end) {
//   while (start < end) {
//     [arr[start], arr[end]] = [arr[end], arr[start]];
//     start++;
//     end--;
//   }
// }

// const rightRotate = (arr, n) => {
//   let k = n % arr.length;
//   reverseArray(arr, 0, arr.length - 1);
//   reverseArray(arr, 0, k - 1);
//   reverseArray(arr, k, arr.length - 1);
//   return arr;
// };

// const leftRotate = (arr, k) => {
//   let n = arr.length;
//   k = k % n;
//   console.log(arr);
//   reverseArray(arr, 0, k - 1);
//   console.log(arr);
//   reverseArray(arr, k, arr.length - 1);
//   console.log(arr);
//   reverseArray(arr, 0, arr.length - 1);
//   console.log(arr);
//   return arr;
// };
// leftRotate(arr, n);
// console.log(leftRotate([1, 2, 3, 4, 5], 1));
// console.log(rightRotate(arr, n));

9;
// . Reverse a string — without using built-ins.

// let str = "Aashish";

// const revString = (str) => {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     result = str[i] + result;
//   }
//   return result;
// };

// console.log(revString(str));

10;
//  Remove duplicates from a string — efficiently.

// let str = "Aashish";

// const removeDuplicates = (str) => {
//   str = str.toLowerCase();
//   let set = new Set();
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     if (!set[str[i]]) {
//       result = result + str[i];
//       set[str[i]] = true;
//     }
//   }
//   return result;
// };

// console.log(removeDuplicates(str));

11;
// First non-repeating character — who stands alone?

// let str = "Aashish";

// function nonRepeatingChar(str) {
//   let map = new Map();
//   str = str.toLowerCase();
//   for (let i = 0; i < str.length; i++) {
//     if (map.has(str[i])) {
//       map.set(str[i], map.get(str[i]) + 1);
//     } else {
//       map.set(str[i], 1);
//     }
//   }
//   for (let [key, value] of map) {
//     if (value === 1) {
//       return key;
//     }
//   }
// }

// console.log(nonRepeatingChar(str));

12;
// // Are two strings anagrams? Prove it

// let s1 = "mamaa";
// let s2 = "mamam";

// function checkAnagram(s1, s2) {
//   if (s1.length === 0 || s2.length === 0) return false;
//   let l1 = s1.length;
//   let l2 = s2.length;
//   if (l1 !== l2) return false;
//   const map = new Map();
//   for (let char of s1) {
//     map.set(char, (map.get(char) || 0) + 1);
//   }
//   console.log(map);
//   for (let char of s2) {
//     if (map.get(char) <= 0) {
//       console.log(map.get(char), char);
//       return false;
//     }
//     map.set(char, map.get(char) - 1);
//   }
//   return true;
// }

// console.log(checkAnagram(s1, s2));

13;
//  Longest substring without repeats — sliding window style.
// Input: "abcabcbb"
// Output: 3 (substring "abc")

// let s = "abcabcbb";

// function longestSubString(s) {
//   let set = new Set();
//   let left = 0;
//   let res = "";
//   let max = 0;
//   for (let right = 0; right < s.length; right++) {
//     while (set.has(s[right])) {
//       set.delete(s[right]);
//       left++;
//     }
//     set.add(s[right]);
//     if (right - left + 1 > max) {
//       max = right - left + 1;
//       res = "";
//       for (let i = left; i <= right; i++) {
//         res = res + s[i];
//       }
//     }
//     // console.log({ set, left, right, res });
//   }

//   return {
//     max,
//     res,
//   };
// }

// console.log(longestSubString(s));

14;
// Find the "Kth" smallest element in the array

let arr = [3, 2, 4, 7, 5, 6, 1];
// let arr = [1, 2, 3, 4, 5, 6, 7];

function partition(arr, start, end) {
  let pivot = arr[start];
  while (start < end) {
    while (arr[start] <= pivot) {
      start++;
    }
    while (ar[end] > pivot) {
      end--;
    }
    if (arr[start] < arr[end]) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
    }
  }
}

function kthSmallestElement(arr, k) {
  let start = 0;
  let end = arr.length - 1;
  const pivotIndex = partition(arr);
}

console.log(kthSmallestElement(arr, 3));
