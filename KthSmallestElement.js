// Find the "Kth" smallest element in the array

// let arr = [3, 2, 4, 7, 5, 6, 1]

// const kthSmallestElement = (arr, k) => {
// for (let i = 0; i < arr.length-1; i++){
//     let smallest = arr[i]
//     for (let j = i + 1; j < arr.length; j++){
//         let temp
//         if (arr[j] < smallest) {
//             temp = arr[j]
//             arr[j] = arr[i]
//             arr[i] = temp
//         smallest = arr[i]
//         }
//     }
//         }
//   console.log(arr)
//     return  arr[k-1]
// }

// const result = kthSmallestElement(arr, 3)

// console.log({result})

let arr = [0, 2, 4, 7, 5, 6, 1];

const kthSmallestElement = (arr, k) => {
  let map = new Map();
  let kthSmallestElement = arr[0];
  map.set(kthSmallestElement, 1);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < kthSmallestElement) {
      map.set(kthSmallestElement, map.get(kthSmallestElement) + 1);
      map.set(arr[i], 1);
      kthSmallestElement = arr[i];
    }
  }
  return map;
};

const result = kthSmallestElement(arr, 3);

console.log({ result });
