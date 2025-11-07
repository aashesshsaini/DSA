1; // Bubble Sorting Algorithm

// let arr = [1, 2, 4, 3, 6, 5, 1];

// const bubbleSort = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// };

// console.log(bubbleSort(arr));

2; //Insertion Sort

// let arr = [1, 2, 4, 3, 6, 5, 1];

// const insertionSort = function (arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let temp = arr[i];
//     let j = i - 1;
//     while (j >= 0 && arr[j] > temp) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = temp;
//   }
//   return arr;
// };

// console.log(insertionSort(arr));

// 3; Selection Sort Algorithm

// let arr = [1, 2, 4, 3, 6, 5, 1];

// const selectionSortAlgo = function (arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//   }
//   return arr;
// };

// console.log(selectionSortAlgo(arr));

// 4; Quick Sort Algorithm

// let arr = [1, 2, 4, 3, 6, 5, 1];

// function partition(arr, lb, ub) {
//   let start = lb;
//   let end = ub;
//   let pivot = arr[start];
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

// const quickSortAlgo = function (arr, lb, ub) {
//   if (lb < ub) {
//     let loc = partition(arr, lb, ub);
//     quickSortAlgo(arr, lb, loc - 1);
//     quickSortAlgo(arr, loc + 1, ub);
//   }
//   return arr;
// };

// console.log(quickSortAlgo(arr, 0, arr.length - 1));

// 5; Merge Sort Algoirithm

function merge(arr, lb, mid, ub) {
  let start = lb;
  let end = mid + 1;
  let result = [];
  let k = 0;
  while (start <= mid && end <= mid) {
    if (arr[start] < arr[end]) {
      result[k] = arr[start];
      i++;
    } else {
      result[k] = arr[end];
      j++;
    }
    k++;
  }
  while (start <= mid) {
    result[k] = arr[start];
    start++;
    k++;
  }
  while (end <= mid) {
    result[k] = arr[end];
    k++;
    end++;
  }
  for (let m = 0; m < result.length; m++) {
    arr[lb] = result[m];
    lb++;
  }
}

let arr = [1, 2, 4, 3, 6, 5, 1];
const mergeSortAlgo = function (arr, lb, ub) {
  if (lb < ub) {
    let mid = Math.floor((lb + ub) / 2);
    mergeSortAlgo(arr, lb, mid);
    mergeSortAlgo(arr, mid + 1, ub);
    merge(arr, lb, mid, ub);
  }
  return arr;
};

console.log(mergeSortAlgo(arr, 0, arr.length - 1));
