// Find the intersection of two arrays

let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];
// Output:  [2]

function intersectionArray(arr1, arr2) {
  let output = [];
  let seen = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!seen[arr1[i]]) {
      seen[arr1[i]] = true;
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    if (seen[arr2[i]]) {
      output.push(arr2[i]);
    }
  }
  return output;
}

const result = intersectionArray(nums1, nums2);

console.log({ result });

// Corrected Version (ensures uniqueness in output)

function intersectionArray(arr1, arr2) {
  let output = [];
  let seen = {};
  let added = {}; // Track what's already added to output

  for (let i = 0; i < arr1.length; i++) {
    seen[arr1[i]] = true; // just mark it exists
  }

  for (let i = 0; i < arr2.length; i++) {
    if (seen[arr2[i]] && !added[arr2[i]]) {
      output.push(arr2[i]);
      added[arr2[i]] = true;
    }
  }

  return output;
}

let output = [];
let k = 0;
const seen = {};
for (let i = 0; i < nums1.length; i++) {
  if (!seen[nums1[i]]) {
    seen[nums1[i]] = true;
  }
}
for (let j = 0; j < nums2.length; j++) {
  if (seen[nums2[j]]) {
    seen[nums2[j]] = false;
    output[k] = nums2[j];
    k++;
  }
}
