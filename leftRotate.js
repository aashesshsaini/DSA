// Left rotate an array by one place

let input = [1, 2, 3, 4, 5]
const noOfPlace = 1
// let output = [2, 3, 4, 5, 1]

function leftRotate(arr, noOfPlace) {
    const n = arr.length
    for (let i = 0; i < noOfPlace; i++) {
    let reserve = arr[0]
        for (let i = 0; i < n; i++) {
            arr[i] = arr[i + 1]
        }
        arr[n - 1] = reserve
    }
    return arr
}

const result = leftRotate(input, noOfPlace)

console.log({ result })


// Optimized Interview Approach (Using Reversal Algorithm)
// This method rotates the array in O(n) time even for large noOfPlace.

function reverse(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

function leftRotate(arr, k) {
    const n = arr.length;
    k = k % n; // in case k > n

    reverse(arr, 0, k - 1);      // Reverse first k
    reverse(arr, k, n - 1);      // Reverse the rest
    reverse(arr, 0, n - 1);      // Reverse all

    return arr;
}