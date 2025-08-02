const arr = [2, 3, 1, 5, 4, 10, 6, 4, 3, 25, 1];

function merge(arr, lb, mid, ub) {
  let i = lb;
  let j = mid + 1;
  let k = 0;
  let result = [];
  while (i <= mid && j <= ub) {
    if (arr[i] < arr[j]) {
      result[k] = arr[i];
      i++;
    } else {
      result[k] = arr[j];
      j++;
    }
    k++;
  }
  while (i <= mid) {
    result[k] = arr[i];
    i++;
    k++;
  }
  while (j <= ub) {
    result[k] = arr[k];
    j++;
    k++;
  }
  for (let m = 0; m < result.length; m++) {
    arr[lb] = result[m];
    lb++;
  }
}

const mergeSortAlgo = (arr, lb, ub) => {
  if (lb < ub) {
    let mid = Math.floor((lb + ub) / 2);
    mergeSortAlgo(arr, lb, mid);
    mergeSortAlgo(arr, mid + 1, ub);
    merge(arr, lb, mid, ub);
  }
};

mergeSortAlgo(arr, 0, arr.length - 1);
console.log(arr);
