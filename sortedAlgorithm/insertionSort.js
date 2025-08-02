const arr = [2, 3, 1, 5, 4];

const insertionSortAlgo = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return arr;
};

const result = insertionSortAlgo(arr);
console.log(result);
