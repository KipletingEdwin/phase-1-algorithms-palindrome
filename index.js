function isPalindrome(word) {
  // Write your algorithm here
  let reg=/[\W_]/g;
  let smallWord=word.toLowerCase().replace(reg,"");

  let reversed=smallWord.split("").reverse().join("");
  if(reversed=smallWord) return true;
  
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
