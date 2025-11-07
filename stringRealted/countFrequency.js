// 3. Count Characters Frequency

// Example: "aabbc" → {a:2, b:2, c:1}

// let string = "aabbc";

// const countFrequency = function (s) {
//   let map = new Map();
//   for (let i = 0; i < s.length; i++) {
//     map.set(s[i], (map.get(s[i]) || 0) + 1);
//   }
//   let obj = {};
//   for (let [key, value] of map) {
//     obj[key] = value;
//   }
//   return obj;
// };

// console.log(countFrequency(string));

// 4. Check Anagrams
// "listen" and "silent" → ✅
// let s1 = "listen";
// let s2 = "silent";

// const checkAnagram = function (s1, s2) {
//   let map1 = new Map();
//   if (s1.length !== s2.length) return false;
//   for (let i = 0; i < s1.length; i++) {
//     map1.set(s1[i], (map1.get(s1[i]) || 0) + 1);
//   }
//   for (let i = 0; i < s2.length; i++) {
//     if (!map1.has(s2[i]) || map1.get(s2[i] === 0)) return false;
//     map1.set(s2[i], map1.get(s2[i]) - 1);
//   }
// return true;
// let map2 = new Map();
// for (let i = 0; i < s2.length; i++) {
//   map2.set(s2[i], (map2.get(s2[i]) || 0) + 1);
// }
// for (let [key, value] of map1) {
//   if (!map2.has(key) && map2.get(key) !== value) return false;
// }
// return true;
// };

// console.log(checkAnagram(s1, s2));

// 5. Longest Common Prefix

// Example: ["flower", "flow", "flight"] → "fl"

// let arrStr = ["flower", "flow", "flight"];

// const longestCommonPrefix = function (arrStr) {
//   for (let i = 0; i < arrStr.length; i++) {}
// };

// console.log(longestCommonPrefix(arrStr));

// Longest Substring Without Repeating Characters

// Example: "abcabcbb" → "abc" → length = 3

// const longestSub = function (str) {
//   let j = 0;
//   let map = new Map();
//   let sub = "";
//   for (let i = 0; i < str.length; i++) {
//     if (!map.has(str[i])) {
//       sub += str[i];
//       map.set(str[i], true);
//     }
//   }
// };

// 7. String Compression

// Example: "aaabbc" → "a3b2c1"

// let s = "aaabbc";

// const strCom = function (s) {
//   let map = new Map();
//   let count = 0;
//   let result = "";
//   for (let i = 0; i < s.length; i++) {
//     map.set(s[i], (map.get(s[i]) || 0) + 1);
//   }
//   for (let [key, value] of map) {
//     result += key + value;
//   }
//   return result;
// };

// console.log(strCom(s));

// Valid Parentheses

// Example: "({[]})" → ✅
let str = "({[]})";

const validParantheses = function (str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if ((ch = "(" || "{" || "[")) {
      stack.push(ch);
    } else {
      let elem = stack.pop();
      if (
        (char === "(" && elem !== ")") ||
        (char === "{" && elem !== "}") ||
        (char === "[" && elem !== "]")
      )
        return false;
    }
  }
  console.log(stack);
  return stack.length === 0;
};

console.log(validParantheses(str));
