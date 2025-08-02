// Find the union of two arrays

// Input:
// let nums1 = [1, 2, 3, 4, 5]
// let nums2 = [1, 2, 3]
// Output:  [1, 2, 3, 4, 5]

// function unionOfArrays(arr1, arr2) {
//     let output = []
//     let n1 = arr1.length
//     let n2 = arr2.length
//     output = [...arr1]
//     for (let i = 0; i < n2; i++){
//         let index = output.indexOf(nums2[i])
//         if (index === -1) {
//             output.push(nums2[i])
//         }
//     }
//     return output
// }

// function unionOfArrays(arr1, arr2) {
//     let output = []
//     let n1 = arr1.length
//     let n2 = arr2.length

// }

//  Optimized Version (using Object Map)

function unionOfArrays(arr1, arr2) {
  let result = [];
  let seen = {};

  // Add all elements from arr1
  for (let i = 0; i < arr1.length; i++) {
    if (!seen[arr1[i]]) {
      seen[arr1[i]] = true;
      result.push(arr1[i]);
    }
  }

  // Add elements from arr2 only if not already added
  for (let i = 0; i < arr2.length; i++) {
    if (!seen[arr2[i]]) {
      seen[arr2[i]] = true;
      result.push(arr2[i]);
    }
  }

  console.log(seen);

  return result;
}

const result = unionOfArrays(nums1, nums2);
console.log({ result });
