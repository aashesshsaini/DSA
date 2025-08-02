// Check if an array is sorted

let arr = [1, 2, 3, 4, 5, 6, 7, 8]

function checkSortedArray(arr) {
    let min = arr[0]
    for (let i = 1; i < arr.length; i++){
        if (min>arr[i]) {
            return {message: "array is not sorted"}
        } 
        min = arr[i]
    }
      return {message: "array is sorted"}
}

const result = checkSortedArray(arr)
console.log({ result })


// Result 
// Suggested Clean Version
// You don’t need to store min — just compare adjacent elements:

function checkSortedArray(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
            return { message: "array is not sorted" }
        }
    }
    return { message: "array is sorted" }
}