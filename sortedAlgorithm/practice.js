// 1. Bubble Sort Algorithm

// const arr = [9, 2, 5, 1, 6, 4, 8, 7];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length - i - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//     }
//   }
// }

// console.log(arr);

// 1. Insertion Sort Algorithm

// const arr = [9, 2, 5, 1, 6, 4, 8, 7];

// for (let i = 1; i < arr.length; i++) {
//   let j = i - 1; // 0
//   let temp = arr[i]; // 5
//   while (j >= 0 && arr[j] > temp) {
//     arr[j + 1] = arr[j];
//     j--;
//   }
//   arr[j + 1] = temp;
// }

// console.log(arr);

// 3. Selection sort Algorithm

// const arr = [9, 2, 5, 1, 6, 4, 8, 7];

// for (let i = 0; i < arr.length; i++) {
//   let lowestValueIndex = i;
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[j] < arr[lowestValueIndex]) {
//       lowestValueIndex = j;
//     }
//   }
//   [arr[lowestValueIndex], arr[i]] = [arr[i], arr[lowestValueIndex]];
// }

// console.log(arr);

// 4. Quick Sort Algorithm

// const arr = [9, 2, 5, 1, 6, 4, 8, 7];

// function split(a, lb, ub) {
//   let start = lb;
//     let end = ub;
//     while (start < end) {

//     }
// }

// const quickSortAlgo = (a, lb, ub) => {
//   const loc = split(a, lb, ub);
//   quickSortAlgo(a, lb, loc);
//   quickSortAlgo(a, loc + 1, ub);
// };

// 4. Merge Sort Algorithm

// const arr = [9, 2, 5, 1, 6, 4, 8, 7];

// function merge(a, lb, mid, ub) {
//   let i = lb;
//   let j = mid + 1;
//   let k = 0;
//   let result = [];
//   while (i <= mid && j <= ub) {
//     if (a[i] < a[j]) {
//       result[k] = a[i];
//       i++;
//     } else {
//       result[k] = a[j];
//       j++;
//     }
//     k++;
//   }
//   while (i <= mid) {
//     result[k] = a[i];
//     i++;
//     k++;
//   }
//   while (j <= ub) {
//     result[k] = a[j];
//     j++;
//     k++;
//   }
//   for (let m = 0; m < result.length; m++) {
//     arr[lb] = result[m];
//     lb++;
//   }
// }

// const mergeSortAlgo = (a, lb, ub) => {
//   if (lb < ub) {
//     let mid = Math.floor((lb + ub) / 2);
//     mergeSortAlgo(a, lb, mid);
//     mergeSortAlgo(a, mid + 1, ub);
//     merge(a, lb, mid, ub);
//   }
// };

// mergeSortAlgo(arr, 0, arr.length - 1);

// console.log(arr);

// const arr = [2, 3, 1, 5, 4];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//     }
//   }
// }

// for (let i = 1; i < arr.length; i++) {
//   let temp = arr[i]; //1
//   let j = i - 1; // 1
//   while (j >= 0 && arr[j] > temp) {
//     arr[j + 1] = arr[j];
//     j--;
//   }
//   arr[j + 1] = temp;
// }

// for (let i = 0; i < arr.length; i++) {
//   let minIndex = i;
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[minIndex] > arr[j]) {
//       minIndex = j;
//     }
//   }
//   [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
// }

// console.log(arr);

const arr = [2, 3, 1, 5, 4, 10, 6, 4, 3, 25, 1];

// function partition(arr, lb, ub) {
//   let start = lb;
//   let end = ub;
//   let pivot = arr[lb];
//   while (start < end) {
//     while (arr[start] <= pivot) {
//       start++;
//     }
//     while (arr[end] > pivot) {
//       end--;
//     }
//     if (start < end) {
//       [arr[start], arr[end]] = [arr[end], arr[start]];
//     }
//   }
//   [arr[lb], arr[end]] = [arr[end], arr[lb]];
//   return end;
// }

// const quickSortAlgo = (arr, lb, ub) => {
//   if (lb < ub) {
//     let loc = partition(arr, lb, ub);
//     quickSortAlgo(arr, lb, loc - 1);
//     quickSortAlgo(arr, loc + 1, ub);
//   }
//   return arr;
// };

// const result = quickSortAlgo(arr, 0, arr.length - 1);
// console.log(result);

function merge(arr, lb, mid, ub) {
  let start = arr[lb];
}

const mergeSortAlgo = (arr, lb, ub) => {
  if (lb < ub) {
    let mid = Math.floor((lb + ub) / 2);
    mergeSortAlgo(arr, lb, mid);
    mergeSortAlgo(arr, mid + 1, ub);
    merge(arr, lb, mid, ub);
  }
  return arr;
};

const result = mergeSortAlgo(arr, 0, arr.length - 1);
console.log(result);
