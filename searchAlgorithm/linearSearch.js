const arr = [2, 3, 1, 5, 4];
let target = 6;

const linearSearchAlgo = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

const result = linearSearchAlgo(arr, target);
console.log(result);
