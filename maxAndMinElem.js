// Find the maximum and minimum element in an array
let arr = [2, 3, 1, 5, 3, 6, 6]
  let max = arr[0];
  let min = arr[0];
for (let i = 1; i < arr.length; i++){
 
    if (arr[i] > max) {
        max = arr[i]
    }

    if (arr[i] < min) {
        min = arr[i]
    }
 
}

console.log({ min, max })



// Result

// ✅ Optimized Code:
function findMinMax(arr) {
  let n = arr.length;
  let min, max;
  let i;

  // If even number of elements, initialize first pair
  if (n % 2 === 0) {
    if (arr[0] < arr[1]) {
      min = arr[0];
      max = arr[1];
    } else {
      min = arr[1];
      max = arr[0];
    }
    i = 2;
  } else {
    // If odd, start with first element
    min = max = arr[0];
    i = 1;
  }

  while (i < n - 1) {
    let localMin, localMax;
    if (arr[i] < arr[i + 1]) {
      localMin = arr[i];
      localMax = arr[i + 1];
    } else {
      localMin = arr[i + 1];
      localMax = arr[i];
    }

    if (localMin < min) min = localMin;
    if (localMax > max) max = localMax;

    i += 2;
  }

  return { min, max };
}

// Example usage
let arr1 = [2, 3, 1, 5, 3, 6, 6];
console.log(findMinMax(arr1));
