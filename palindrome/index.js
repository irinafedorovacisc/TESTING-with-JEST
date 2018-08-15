// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   return str.split('').every((char, i) => {
//         return char === str[str.length - i - 1];
//   });
// }
  
function palindrome(str1) {
  let str =str1.split('')
  let len = str.length;
      for (let i = 0; i < Math.floor(len/2); i++) {
          if (str[i] !== str[len - 1 - i])
              return false;
      }
  return true;
}

// function palindrome(str) {
//   let reversed = str.split('').reverse().join('');
//   return str === reversed;
// }

console.log(palindrome('babbabmm'))
module.exports = palindrome;
