1;
// Count the digits of a number

// Input: 12345
// Output: 5

// let num = 12349

// let count = 0

// while (num > 0) {
//     num = Math.floor(num / 10)
//     count = count + 1
//     console.log({num, count})
// }
// console.log({count})

2;
//  Extract and print each digit

// Input: 5742
// Output: 2 4 7 5

// let num = 5742 = 574.2
// while (num > 0) {
//     let digit = num % 2
//     console.log({digit})
//     num = Math.floor(num / 10)

// }

3;
// Reverse a number
// Input: 1234
// Output: 4321

// let num = 1234
// let revNumber = 0
// while (num > 0) {
//     let digit = num % 10
//     num = Math.floor(num / 10)
//     revNumber = 10*revNumber+digit
// }

// console.log(revNumber)

4;
// Check if a number is a palindrome
// Input: 121
// Output: true

// let num = 121
// let originalNum = num
// let rev = 0
// while (num > 0) {
//     let digit = num % 10
//     rev = 10 * rev + digit
//     num = Math.floor(num/10)
// }

// if (rev === originalNum) {
//     console.log(`${originalNum} is palindrom`)
// } else {
//      console.log(`${originalNum} is not palindrom`)
// }

5;
// Prime number

// let num = 9
// let count = 0
// for (let i = 2; i * i <=num; i++){
//     if (num % i === 0) {
//         count++
//     }

// }

// if (count === 0) {
//     console.log(`number : ${num} is Prime number`)
// } else {
//      console.log(`number : ${num} is not a Prime number`)
// }

6;
// Find all prime numbers up to N (Sieve of Eratosthenes)

// let N = 100;

// for (let i = 2; i <= 100; i++) {
//   let count = 0;
//   for (let j = 2; j * j <= i; j++) {
//     if (i % j === 0) {
//       count++;
//     }
//   }
//   if (count === 0) {
//     console.log(`${i} is prime number`);
//   }
// }

7;
//  Check if a number is an Armstrong number

// Input: 153
// Output: true
// let num = 153
// let originalNum = num
// let armNum = 0
// while (num > 0) {
//     let digit = num % 10
//     armNum = armNum + (digit * digit * digit)
//     num = Math.floor(num/10)
// }

// if (armNum === originalNum) {
//     console.log(`${originalNum} is Armstrong Number`)
// } else {
//     console.log(`${originalNum} is not Armstrong Number`)
// }

8;
//  Check if a number is a perfect number
// Input: 28
// Output: true   // 1+2+4+7+14 = 28

// let num = 28
// let sum = 0
// for (let i = 1; i * i <= num; i++){
//     if (num % i === 0) {
//         sum = sum + i
//         console.log(sum)
//         if (i !== num) sum += i;
//         let anotherDigit = Math.floor(num / i)
//         if (i !== anotherDigit && anotherDigit !== num) {
//             sum = sum + anotherDigit
//         }
//         console.log(sum)
//     }
// }

// if (sum === num) {
//     console.log(`${num} is perfect number`)
// } else {
//     console.log(`${num} is not perfect number`)

// }

9;
// GCD (HCF) of two numbers
// Input: 12, 18
// Output: 6

let n1 = 40;
let n2 = 20;
let HCF = 1;

for (let i = 1; i <= Math.min(n1, n2); i++) {
  if (n1 % i === 0 && n2 % i === 0) {
    if (HCF < i) {
      HCF = i;
    }
  }
}

console.log({ HCF });

10;
// LCM of two numbers
// Input: 4, 6
// Output: 12

// let n1 = 13
// let n2 = 11
// let LCM = 1
// let GCD = 1

// for (let i = 1; i < Math.min(n1,n2); i++){
//     if (n1 % i === 0 && n2 % i === 0) {
//         if (GCD < i) {
//             GCD = i
//         }
//     }
// }

// LCM = n1*n2/GCD

// console.log({LCM})

11;
// Convert a Decimal number to binary number

// let num = 10
// let binary = ''
// while (num > 0) {
//     binary = num % 2 + binary
//     num = Math.floor(num/2)
// }

// console.log(binary)

// let octal = ''
// while (num > 0) {
//     octal = num % 8 + octal
//     num = Math.floor(num/8)
// }

// console.log(octal)

12;
//  Count number of set bits (1s) in a number's binary

// let num = 19
// let decimal = ''
// let count = 0

// while (num > 0) {
//     let module = num % 2
//         decimal = module + decimal
//     if (module === 1) {
//         count++
//     }
//     num = Math.floor(num/2)
// }

// console.log({decimal, count})

13;
//  Find the factorial of a number
// Input: 5
// Output: 120

// let num = 5
// let fact = 1

// function factorial(n) {
//     if (n === 0 || n === 1) return 1;
//     return n * factorial(n - 1);
// }

// function factorial(n) {
//     for (let i = n; i > 0; i--){
//         fact = i * fact
//     }
//     return fact
// }

// const result = factorial(5)

// console.log({result})

// 14;
// let arr = [
//   [1, 2, 3, 4],
//   [6, 7, 8, 9],
//   [11, 12, 13, 14],
//   [16, 17, 18, 19],
// ];

// function nightDegreeRoation(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr[0].length; j++) {
//       let temp = arr[i][j];
//       arr[i][j] = arr[j][i];
//       arr[j][i] = temp;
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     let start = 0;
//     let end = arr.length - 1;
//     while (start < end) {
//       temp = arr[i][start];
//       arr[i][start] = arr[i][end];
//       arr[i][end] = temp;
//       start++;
//       end--;
//     }
//   }
//   return arr;
// }

// const result = nightDegreeRoation(arr);
// console.log(result);
