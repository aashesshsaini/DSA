// Linear Search algo
// const arr = [7, 1, 5, 3, 6, 4];
// const arr = [1, 2, 3, 4, 5, 6, 7];
const arr = [4, 1, 2, 3];

let target = 3;

const binarySearchAlgo = function (arr, target) {
  let lb = 0;
  let ub = arr.length - 1;
  while (lb <= ub) {
    let mid = Math.floor((lb + ub) / 2);
    if (target === arr[mid]) return mid;
    if (arr[lb] <= arr[mid]) {
      if (target < arr[mid] && target >= arr[lb]) ub = mid - 1;
      else lb = mid + 1;
    } else {
      if (target > arr[mid] && target <= arr[ub]) lb = mid + 1;
      else ub = mid - 1;
    }
  }
};
console.log(binarySearchAlgo(arr, target));

// const binarySearchAlgo = function (arr, target) {
//   let lb = 0;
//   let ub = arr.length - 1;
//   let mid = Math.floor((lb + ub) / 2);
//   while (lb <= ub) {
//     console.log({ mid, lb, ub });
//     if (arr[mid] === target) return mid;
//     if (target > arr[mid]) lb = mid + 1;
//     if (target < arr[mid]) ub = mid - 1;
//     mid = Math.floor((lb + ub) / 2);
//   }
//   return -1;
// };
// console.log(binarySearchAlgo(arr, target));

// const linearSearchAlgo = function (arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// };

// console.log(linearSearchAlgo(arr, target));
