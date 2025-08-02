// Check if a string is a palindrome


// let s = "anagram"

// const palindromeCheckString = (s) => {
//     let rev = ""
//     for (let i = s.length - 1; i >= 0; i--) {
//        let char = s[i]
//         rev = rev + char
//         console.log({char, rev})
//     }
//     console.log(rev)
//     if (rev === s) {
//         return true
//     } else {
//         return false
//     }
// }

// const result = palindromeCheckString(s)
// console.log({result})



// Optional Optimization (Two-pointer method, no extra space):


const isPalindrome = (s) => {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}