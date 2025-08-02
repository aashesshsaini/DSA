// Reverse an array

// let arr = [1, 2, 3, 4, 5, 6, 7]

// revArray = [8,7,6,5,4,3,2,1]

// function revArray(arr) {
//     let n = arr.length
//     for (let i = 0; i < Math.floor(n / 2); i++){
//         let backup = arr[i]
//         arr[i] = arr[n -1 - i]
//         arr[n - 1 - i] = backup
//     }
//     return arr
// }

// const reverseArray = revArray(arr)

// console.log({ reverseArray })

// Result
// Final Verdict
// ✅ Your solution is:

// Efficient

// Interview-friendly

// No built-in functions

// Clean and readable

// No improvement needed for this problem — your code is already optimal.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// function revArray(arr) {
//   let start = 0;
//   let end = arr.length - 1;
//   while (start < end) {
//     [arr[start], arr[end]] = [arr[end], arr[start]];
//     start++;
//     end--;
//   }
//   return arr;
// }

// const reverseArray = revArray(arr);

// console.log({ reverseArray });
