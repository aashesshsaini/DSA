2;
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// let prices = [7, 1, 5, 3, 6, 4];
// let buy = prices[0];
// let profit = 0;

// console.log({ profit });

//Bubble sort
// for (let i = 0; i < prices.length; i++) {
//   for (let j = 0; j < prices.length; j++) {
//     if (prices[j + 1] < prices[j]) {
//       [prices[j + 1], prices[j]] = [prices[j], prices[j + 1]];
//     }
//   }
// }

//Insertion Sort
// for (let i = 1; i < prices.length; i++) {
//   let temp = prices[i];
//   let j = i - 1;
//   while (j >= 0 && prices[j] > temp) {
//     prices[j + 1] = prices[j];
//     j--;
//   }
//   prices[j + 1] = temp;
// }

//Selection Sort

// for (let i = 0; i < prices.length; i++) {
//   let minIndex = i;
//   for (let j = i + 1; j < prices.length; j++) {
//     if (prices[j] < prices[minIndex]) {
//       minIndex = j;
//     }
//   }
//   [prices[minIndex], prices[i]] = [prices[i], prices[minIndex]];
// }
// console.log(prices);

//linear Search
// let target = 8;
// for (let i = 0; i < prices.length; i++) {
//   if (prices[i] === target) {
//     console.log(`Target value exist in the prices array at ${i} index`);
//   }
// }

// Binary Searcg
// prices.sort((a, b) => a - b);
// console.log(prices, "prices........");
// let target = 5;
// let left = 0;
// let right = prices.length - 1;
// let mid = Math.floor((left + right) / 2);

// while (left <= right) {
//   console.log(prices[mid]);
//   console.log({ left, right });
//   if (target === prices[mid]) {
//     console.log(`Target value exist in the prices array at ${left} index`);
//     break;
//   } else if (target > prices[mid]) left = mid + 1;
//   else if (target < prices[mid]) right = mid - 1;
//   mid = Math.floor((left + right) / 2);
// }

let prices = [7, 1, 5, 3, 6, 4];

function partition(prices, left, right) {
  let lb = left;
  let ub = right;
  let pivot = arr[lb];
  while (lb < ub) {
    if (prices[start] <= pivot) {
      start++;
    }
    if (prices[end] > pivot) {
      end--;
    }
  }
}

const quickSortAlgo = (prices, left, right) => {
  const loc = partition(prices, left, right);
};

const result = quickSortAlgo(prices, 0, prices.length - 1);
