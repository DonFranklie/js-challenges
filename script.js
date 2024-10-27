// Palindrome Checker

function isPalindrome(word) {
  let newWord = word.toLowerCase().split("").reverse();
  // newWord = newWord.reverse();

  if ( newWord.join("") === word.toLowerCase()) {
    return true
  } else {
    return false
  }
  


}

console.log(isPalindrome("madam"));
console.log(isPalindrome("RaceCar"));
console.log(isPalindrome("apple"));