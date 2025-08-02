// Count the digits of a number

// Input: 12345
// Output: 5

// let num = 123497897;
// let count = 0;

// while (num > 0) {
//   count++;
//   num = parseInt(num / 10);
// }

// console.log({ count });

2;
//  Extract and print each digit

// Input: 5742
// Output: 2 4 7 5
// let num = 5742;

// while (num > 0) {
//   let digit = num % 10;
//   num = Math.floor(num / 10);
//   console.log(digit);
// }

3;
// Reverse a number
// Input: 1234
// Output: 4321

// let num = 1234;
// let revNumber = 0;
// while (num > 0) {
//   rem = num % 10;
//   revNumber = rem + revNumber * 10;
//   num = Math.floor(num / 10);
// }

// console.log(revNumber);

4;
// Check if a number is a palindrome
// Input: 121
// Output: true

// let num = 121;
// let copy = num;

// let revNumber = 0;
// while (num > 0) {
//   rem = num % 10;
//   revNumber = rem + revNumber * 10;
//   num = Math.floor(num / 10);
// }

// console.log({ copy, revNumber });

// console.log(copy === revNumber);

5;
// Prime number

// let num = 12;

// function checkPrime(num) {
//   for (i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// const result = checkPrime(num);
// console.log({ result });

6;
// Find all prime numbers up to N (Sieve of Eratosthenes)

// let N = 100;

// function primeNumbers(target) {
//   for (let i = 2; i <= target; i++) {
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
// }

// const result = primeNumbers(N);

7;
//  Check if a number is an Armstrong number

// Input: 153
// Output: true
// let num = 153;
// let summation = 0;
// function armNum(num) {
//   let originalNum = num;
//   while (num > 0) {
//     let rem = num % 10;
//     summation = summation + rem * rem * rem;
//     num = Math.floor(num / 10);
//   }
//   console.log(summation);
//   if (summation === originalNum) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const result = armNum(num);
// console.log({ result });

8;
//  Check if a number is a perfect number
// Input: 28
// Output: true   // 1+2+4+7+14 = 28

// let num = 27;
// let summation = 0;
// function perfectNum(num) {
//   for (let i = 1; i < num; i++) {
//     if (num % i === 0) {
//       summation = summation + i;
//     }
//   }
//   console.log(summation);
//   if (summation === num) {
//     return true;
//   } else {
//     return false;
//   }
// }

// const result = perfectNum(num);
// console.log({ result });

9;
// GCD (HCF) of two numbers
// Input: 12, 18
// Output: 6
// let num1 = 12;
// let num2 = 18;

// function GCD(num1, num2) {
//   let HCF = 1;
//   for (let i = 2; i < num2; i++) {
//     if (num2 % i === 0 && num1 % i === 0) {
//       if (HCF < i) {
//         HCF = i;
//       }
//     }
//   }
//   return HCF;
// }

// const result = GCD(num1, num2);
// console.log({ result });

10;
// LCM of two numbers
// Input: 4, 6
// Output: 12

// let n1 = 6;
// let n2 = 4;
// let finalLCM = 1;
// let GCD = 1;
// function LCM(n1, n2) {
//   for (i = 2; i <= Math.min(n1, n2); i++) {
//     if (n1 % i === 0 && n2 % i === 0) {
//       if (GCD < i) {
//         GCD = i;
//       }
//     }
//   }
//   return (finalLCM = (n1 * n2) / GCD);
// }

// const result = LCM(n1, n2);
// console.log({ result });

11;
// Convert a Decimal number to binary number

// let num = 10;
// let binary = "";

// while (num > 0) {
//   rem = num % 2;
//   binary = binary + rem;
//   num = Math.floor(num / 2);
// }

// console.log({ binary });

// let octal = "";
// while (num > 0) {
//   octal = (num % 8) + octal;
//   num = Math.floor(num / 8);
// }

// console.log({ octal });

12;
//  Count number of set bits (1s) in a number's binary

// let num = 19;
// let binary = "";
// let count = 0;

// while (num > 0) {
//   let rem = num % 2;
//   if (rem === 1) {
//     count++;
//   }
//   binary = rem + binary;
//   num = Math.floor(num / 2);
// }

// console.log({ binary, count });

13;
//  Find the factorial of a number

// Input: 5         5*4*3*2 = 120
// Output: 120

// let num = 3;
// let fact = 1;

// for (let i = num; i > 1; i--) {
//   fact = fact * i;
// }

// function fact(num) {
//   if (num === 0 || num === 1) {
//     return 1;
//   }
//   return num * fact(num - 1);
// }
// const result = fact(num);

// console.log({ result });

13;
// The cumulative sum of an array at index i is defined as the sum of all elements of the array from index 0 to index i.

// Initial Array: [1, 2, 3, 4]
// Cumulative Sum: [1, 3, 6, 10]

// Initial Array: [1, 1, 1, 1, 1]
// Cumulative Sum: [1, 2, 3, 4, 5]

// let arr = [1, 1, 1, 1, 1];

// function cumulativeSumFunc(arr) {
//   let cumulativeArray = [arr[0]];
//   let sum = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     sum = sum + arr[i];
//     cumulativeArray.push(sum);
//   }
//   return cumulativeArray;
// }

// const result = cumulativeSumFunc(arr);
// console.log({ result });

13;
// Find the maximum and minimum element in an array
// let arr = [20, 3, 1, 5, 3, 6, 6, 0];

// let max = arr[0];
// let min = arr[0];

// function findMinMax(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return { max, min };
// }

// const result = findMinMax(arr);
// console.log({ result });

14;
// Print the frequency of each element in an array

// let arr = [3, 5, 4, 7, 5, 5, 1];

// function frequency(arr) {
//   let fre = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (fre[arr[i]]) {
//       fre[arr[i]]++;
//     } else {
//       fre[arr[i]] = 1;
//     }
//   }
//   return fre;
// }

// const result = frequency(arr);
// console.log(result);

15;
// Find the element that appears only once (others appear twice)
// let arr = [3, 5, 4, 7, 5, 5, 1];

// function appearOnce(arr) {
//   let map = new Map();
//   for (let item of arr) {
//     map.set(item, (map.get(item) || 0) + 1);
//   }
//   for (let [key, value] of map.entries()) {
//     if (value === 1) {
//       return key;
//     }
//   }
// }

// const result = appearOnce(arr);
// console.log(result);

16;
// Left rotate an array by one place

// let input = [1, 2, 3, 4, 5];
// const noOfPlace = 1;
// // let output = [2, 3, 4, 5, 1]

// function leftRotate(arr, noOfPlace) {
//   let saved = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     arr[i - 1] = arr[i];
//   }
//   arr[arr.length - 1] = saved;
//   return arr;
// }

// const result = leftRotate(input, noOfPlace);
// console.log({ result });

17;
// 1. Reverse a string — without using built-ins.

// function revString(str) {
//   let res = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     res += str[i];
//   }
//   return res;
// }

// const result = revString("Aashish");
// console.log({ result });

18;
// . Is it a palindrome? Let's find ou

// function palindrome(str) {
//   let i = str.length - 1;
//   j = 0;
//   while (i > j) {
//     if (str[i] !== str[j]) return false;
//     i--;
//     j++;
//   }
//   return true;
// }

// const result = palindrome("mamam");
// console.log({ result });

18;
//  Remove duplicates from a string — efficiently.

// function removeDuplicates(str) {
//   let lowerCaseString = str.toLowerCase();
//   let seen = {};
//   let res = "";
//   for (let char of lowerCaseString) {
//     console.log(seen);
//     if (!seen[char]) {
//       seen[char] = true;
//       console.log(seen);
//       res += char;
//     }
//   }
//   return res;
// }

// const result = removeDuplicates("Aashish");
// console.log({ result });

19;
// First non-repeating character — who stands alone?

// function nonRepeatingChar(str) {
//   let map = new Map();
//   for (let char of str) {
//     map.set(char, (map.get(char) || 0) + 1);
//   }
//   for (let [key, value] of map) {
//     if (value === 1) {
//       console.log(key);
//     }
//   }
// }

// const result = nonRepeatingChar("Aashish");
// console.log({ result });

20;
// Character Frequency Count:

// function nonRepeatingChar(str) {
//   let lowerCaseString = str.toLowerCase();
//   let map = new Map();
//   let res = "";
//   for (let char of lowerCaseString) {
//     map.set(char, (map.get(char) || 0) + 1);
//   }
//   for (let [key, value] of map) {
//     if (value === 1) {
//       res += key;
//     }
//   }
//   return res;
// }

// const result = nonRepeatingChar("Aashishnd");
// console.log({ result });

21;
// // Are two strings anagrams? Prove it

// let s1 = "Mamaa";
// let s2 = "Mamaa";

// function checkAnagram(s1, s2) {
//   if (s1.length !== s2.length) return false;
//   let map = new Map();
//   for (let char of s1) {
//     map.set(char, (map.get(char) || 0) + 1);
//   }
//   for (let char of s2) {
//     if (!map.get(char)) {
//       return false;
//     }
//     map.set(char, map.get(char) - 1);
//   }
//   return true;
// }

// const result = checkAnagram(s1, s2);
// console.log({ result });

22;
//  Longest substring without repeats — sliding window style.
// Input: "abcabcbb"
// Output: 3 (substring "abc")

// let s = "abcabcbb";

function subStringWithoutRepeat(s) {
  let set = new Set();
  let maxLength = 0;
  let res = "";
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    if (right - left + 1 > maxLength) {
      maxLength = right - left + 1;
      res = "";
      for (let i = left; i <= right; i++) {
        res = res + s[i];
      }
    }
  }
  return { maxLength, res };
}

// const result = subStringWithoutRepeat(s);
// console.log({ result });

// let arr = [2, 2, 3, 4, 5, 3, 4, 5, 1];

// const appearOnce = () => {
//   let map = new Map();
//   for (let i = 0; i < arr.length; i++) {
//     map.set(arr[i], (map.get(arr[i]) || 0) + 1);
//   }
//   console.log(map);
//   for (let [key, value] of map) {
//     if (value === 1) {
//       return key;
//     }
//   }
// };

// const result = appearOnce(arr);
// console.log({ result });
