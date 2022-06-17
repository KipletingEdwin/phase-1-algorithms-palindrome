function isPalindrome(word) {
  // Write your algorithm here
  let l = word.length;
  for (let i = 0; i < l/2; i++) {
   if (word[i] !== word[l - 1 - i]) {
    return false;
   }
  }
  return true;
}



/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

 
  console.log("");

}

module.exports = isPalindrome;
