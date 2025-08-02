// Remove duplicates from a sorted array

// let arr = [1, 2, 3, 4, 4, 5, 6, 6, 7]

// function removeDuplicates(arr) {
//     let arr1 = new Set(arr)
//     return arr1
// }

// function removeDuplicates(arr) {
//     let arr1 = []
//     arr1.push(arr[0])
//     for (let i = 0; i < arr.length-1; i++){
//         if (arr[i] != arr[i+1]) {
//             arr1.push(arr[i+1])
//         }
//     }
//     return arr1
// }

// const result = removeDuplicates(arr)

// console.log({ result })

// Result

// let arr = [1, 2, 3, 4, 4, 5, 6, 6, 7, 2];

// function removeDuplicates(arr) {
//   let i = 0;

//   for (let j = 1; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       i++;
//       arr[i] = arr[j];
//     }
//   }
//   return i + 1;
// }

// const result = removeDuplicates(arr);

// console.log({ result });

// let arr = [1, 2, 3, 4, 4, 5, 6, 6, 7, 2];

// function removeDuplicates(arr) {
//   let map = new Map();
//   let uniqueArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!map.has(arr[i])) {
//       map.set(arr[i], true);
//       uniqueArray.push(arr[i]);
//     }
//   }
//   return uniqueArray;
// }

// const result = removeDuplicates(arr);

// console.log({ result });

let arr = [1, 2, 3, 4, 4, 5, 6, 6, 7, 2];

function removeDuplicatesInPlace(arr) {
  let seen = {};
  let writeIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (!seen[value]) {
      seen[value] = true;
      arr[writeIndex] = value;
      writeIndex++;
    }
  }

  // Trim the array to remove extra elements
  arr.length = writeIndex;
}

// removeDuplicatesInPlace(arr);
// console.log({ arr });
