// Print the frequency of each element in an array

let arr = [3, 2, 4, 7, 5, 5, 1];

// const frequency = (arr) => {
//     let countofEachElem = {}
//     for (let i = 0; i < arr.length; i++){
//         if (!countofEachElem[arr[i]]) {
//            countofEachElem[arr[i]] = 1
//         } else {
//              countofEachElem[arr[i]] += 1
//        }
//     }
//     return countofEachElem
// }

// const result = frequency(arr)
// console.log({result})

// const frequency = (arr) => {
//     const map = new Map()
//     for (let item of arr) {
//         map.set(item,(map.get(item) || 0) + 1)
//     }

//     return map
// }

// const result = frequency(arr)

// for (let [key, value] of result.entries()) {
//     console.log(`${key} appears ${value} times`)
// }

// Find the element that appears only once (others appear twice)

// const appearOnce = (arr) => {
//     const map = new Map()
//     for (let i = 0; i < arr.length; i++){
//         map.set(arr[i], (map.get(arr[i] ) || 0)+1)
//     }
//      for (let [key, value] of map.entries()) {
//         if (value === 1) {
//             return key;
//         }
//     }
//     return null
// }

// const result = appearOnce(arr)
// console.log({result})

15;
// For an array of integers nums, an identical twin is defined as pair (i, j) where nums[i] is equal to nums[j] and i < j.

// Array: [1, 2, 3, 2, 1]
// Number of Identical Twins: 2
// Explanation:
// Identical Twins: [[1, 1], [2, 2]]
// Indexes: (0, 4), (1, 3)

function identicalTwins(arr) {}

const result = identicalTwins(arr);
console.log({ result });
