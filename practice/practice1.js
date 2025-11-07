// Find the union of two arrays

// Input:
// let nums1 = [1, 2, 3, 4, 5, 2];
// let nums2 = [1, 2, 3, 6, 7, 6];
// Output:  [1, 2, 3, 4, 5]

// const unionOfArrays = function (nums1, nums2) {
//   const map = new Map();
//   const output = [];
//   let j = 0;
//   for (let i = 0; i < nums1.length; i++) {
//     if (!map.has(nums1[i])) {
//       map.set(nums1[i], true);
//     }
//   }
//   for (let i = 0; i < nums2.length; i++) {
//     if (!map.has(nums2[i])) {
//       map.set(nums2[i], true);
//     }
//   }
//   for (let [key] of map) {
//     output[j] = key;
//     j++;
//   }
//   return output;
// };
// console.log(unionOfArrays(nums1, nums2));

2; // Reverse an array

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

3;
// Remove duplicates from a sorted array

// let arr = [1, 2, 3, 4, 4, 5, 6, 6, 7];

// const removeDuplicates = function (arr) {
//   let j = 1;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] !== arr[i - 1]) {
//       arr[j] = arr[i];
//       j++;
//     }
//   }
//   arr.length = j;
//   console.log(arr);
// };

// removeDuplicates(arr);

4;
// Move all zeros to the end of the array

// let arr = [0, 1, 0, 3, 12];
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
//   console.log(arr);
// };
// moveZero(arr);

5; // Find the maximum and minimum element in an array
// let arr = [2, -5, 3, 1, 5, 3, 6, 6, 0, -3];

// let min = arr[0];
// let max = arr[0];

// const findMinMax = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     } else if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   console.log({ max, min });
// };

// findMinMax(arr);

6;
// Count the digits of a number

// Input: 12345
// Output: 5

// const digit = 121;

// const checkPalindrom = function (digit) {
//   let reverseValue = 0;
//   let originalNum = digit;
//   while (digit > 0) {
//     let rem = digit % 10;
//     reverseValue = reverseValue * 10 + rem;
//     digit = parseInt(digit / 10);
//   }
//   if (originalNum === reverseValue) {
//     console.log(`${originalNum} is a palindrom number`);
//   } else {
//     console.log(`${originalNum} is not a palindrom number`);
//   }
//   console.log(reverseValue);
// };

// checkPalindrom(digit);

7;
// Prime number

// let num = 17;

// const checkPrime = function (num) {
//   for (let i = 2; i < Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       console.log(`${num} is not a prime number`);
//       return;
//     }
//   }
//   console.log(`${num} is a prime number`);
// };

// checkPrime(num);

8;
// Find all prime numbers up to N (Sieve of Eratosthenes)

// let N = 100;

// const primeNumbers = function (N) {
//   for (let i = 2; i <= N; i++) {
//     let count = 0;
//     for (let j = 2; j <= Math.sqrt(i); j++) {
//       if (i % j === 0) {
//         count++;
//         break;
//       }
//     }
//     if (count < 1) {
//       console.log(i);
//     }
//   }
// };

// primeNumbers(N);

9;
//  Check if a number is an Armstrong number

// Input: 153
// Output: true
// let num = 154;
// let summation = 0;
// let originalNum = num;

// while (num > 0) {
//   let rem = num % 10;
//   summation += rem ** 3;
//   num = parseInt(num / 10);
// }

// if (summation === originalNum) {
//   console.log(`${originalNum} is a Armstrong number`);
// } else {
//   console.log(`${originalNum} is not a Armstrong number`);
// }

10;
//  Check if a number is a perfect number
// Input: 28
// Output: true   // 1+2+4+7+14 = 28
// let digit = 29;
// let summation = 0;
// for (let i = 1; i <= digit / 2; i++) {
//   if (digit % i === 0) {
//     console.log(i);
//     summation += i;
//   }
// }

// if (summation === digit) {
//   console.log(`${digit} is a Perfect number`);
// } else {
//   console.log(`${digit} is not a Perfect number`);
// }

11;
// GCD (HCF) of two numbers
// Input: 12, 18
// Output: 6

// let n1 = 12;
// let n2 = 18;

// let HCF = 1;
// for (let i = 1; i <= Math.max(n1 / 2, n2 / 2); i++) {
//   if (n1 % i === 0 && n2 % i === 0) {
//     if (HCF < i) {
//       HCF = i;
//     }
//   }
// }

// console.log(HCF);

// LCM of two numbers
// Input: 4, 6 //2,2,3
// Output: 12

// let n1 = 6;
// let n2 = 4;

// let HCF = 1;

// for (let i = 1; i < Math.max(n1 / 2, n2 / 2); i++) {
//   if (n1 % i === 0 && n2 % i === 0) {
//     if (HCF < i) {
//       HCF = i;
//     }
//   }
// }

// let LCM = (n1 * n2) / HCF;
// console.log(LCM, "lcm............");
