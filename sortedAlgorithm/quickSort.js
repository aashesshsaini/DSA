const arr = [2, 3, 1, 5, 4, 10, 6, 4, 3, 25, 1];

function partition(arr, lb, ub) {
  let start = lb; // 3
  let end = ub; //2
  let pivot = arr[lb]; //2
  while (start < end) {
    while (arr[start] <= pivot) {
      start++;
    }
    while (arr[end] > pivot) {
      end--;
    }
    if (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]]; // [2, 1, 1, 5, 4, 10, 6, 4, 3, 25, 3]
    }
  }
  [arr[end], arr[lb]] = [arr[lb], arr[end]];
  return end;
}

const quickSortAlgo = (arr, lb, ub) => {
  if (lb < ub) {
    let loc = partition(arr, lb, ub);
    quickSortAlgo(arr, lb, loc - 1);
    quickSortAlgo(arr, loc + 1, ub);
  }
  return arr;
};

const result = quickSortAlgo(arr, 0, arr.length - 1);
console.log(result);
