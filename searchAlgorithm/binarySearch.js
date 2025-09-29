const arr = [7, 1, 5, 3, 6, 4];
let target = 10;

const binarySearchAlgo = (arr, target) => {
  let sortedArray = arr.sort((a, b) => a - b);
  console.log(sortedArray);
  let i = 0;
  let j = arr.length - 1;
  let midIndex = Math.floor((i + j) / 2);
  while (i <= j) {
    if (target === sortedArray[midIndex]) {
      return midIndex;
    } else if (target > sortedArray[midIndex]) {
      i = midIndex + 1;
    } else if (target < sortedArray[midIndex]) {
      j = midIndex - 1;
    }
    midIndex = Math.floor((i + j) / 2);
  }
  return -1;
};

const result = binarySearchAlgo(arr, target);
console.log(result);
