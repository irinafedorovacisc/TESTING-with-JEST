// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// str ='apple'
// console.log(reverse(str))

//  function reverse(str) {
//     let rev = '';  
//     let len = str.length;
//     for(let i = (len-1); i>-1; i--)
//     rev += str[i];
//     return rev;
// }

//  function reverse(str) {
//      let arr = str.split('');
//      arr.reverse();
//      return arr.join('');
//  }

//  function reverse(str) {
//      let rev ='';
//      for(let char of str)
//      rev = char + rev;
//      return rev;
//  }

 function reverse(str) {
     return str.split('').reduce((rev, char)=> char + rev); 
 }

module.exports = reverse;
