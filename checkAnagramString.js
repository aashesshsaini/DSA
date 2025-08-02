// Check if two strings are anagrams of each other

// Input: s = "anagram", t = "nagaram"
// Output: true

let s = "anagram"
let t = "nagaram"

// let s = "cat"
// let t = "rat"

// const checkAnagramString = (s, t) => {
//     let l1 = s.length;
//     let l2 = t.length;
//     let map1 = new Map()
//     let map2 = new Map()
//     if (l1 !== l2) return false
//     for (let char of s) {
//         map1.set(char, (map1.get(char) || 0)+1)
//     }
//      for (let char of t) {
//         map2.set(char, (map2.get(char) || 0)+1)
//     }
//     for (let [key, value] of map1) {
//         if (map2.get(key) !== value) {
//            return false
//        }
//     }
//     return true
// }

// const result = checkAnagramString(s, t)

// console.log({ result})





// Even More Optimized Version (Single Map):

// const checkAnagramString = (s, t) => {
//     if(s.length !== t.length) return false
//     let count = new Array(26).fill(0);
//     for (let i = 0; i < s.length; i++){
//      count[s.charCodeAt(i) - 97]++;
//         count[t.charCodeAt(i) - 97]--;
//     }

//    return count.every(value => value === 0)
// }

// const result = checkAnagramString(s, t)
// console.log({result})