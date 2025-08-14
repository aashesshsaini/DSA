// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

let a = [-1, 0, 1, 2, -1, -4];

function partition(arr, lb, ub) {
  let start = lb;
  let end = ub;
  let pivot = arr[start];
  while (start < end) {
    while (arr[start] <= pivot) {
      start++;
    }
    while (arr[end] > pivot) {
      end--;
    }
  }
}

function quickSortFunction(arr, lb, ub) {
  if (lb < ub) {
    const loc = partition(arr, 0, arr.length - 1);
    quickSortFunction(arr, 0, loc - 1);
    quickSortFunction(arr, loc + 1, ub);
  }
}

const threeSum = (arr) => {
  quickSortFunction(arr, 0, arr.length - 1);
};
