// For an array of integers nums, an identical twin is defined as pair (i, j) where nums[i] is equal to nums[j] and i < j.

// Array: [1, 2, 3, 2, 1]
// Number of Identical Twins: 2
// Explanation:
// Identical Twins: [[1, 1], [2, 2]]
// Indexes: (0, 4), (1, 3)

let arr = [1, 2, 3, 2, 1];
let count = 0;

const identicalTwins = (arr) => {
  let identicalTwinsNum = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && i < j) {
        count++;
      }
    }
  }
  return count;
};

const result = identicalTwins(arr);
console.log({ result });
