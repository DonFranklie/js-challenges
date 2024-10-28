// Find Longest Word
  
function findLongestWord(sentence) {
  sentence = sentence.replace(/[\,.?'"@!$()]/g, "").toLowerCase().split(" ");
  let longestWord = "";

    for (let i = 0; i < sentence.length; i++) {
      const word = sentence[i];

      if (longestWord.length < word.length) {
        longestWord = word;
      }
      
    }

    return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog.")); // "jumped"
console.log(findLongestWord("To be or not to be, that is the question.")); // "question"
console.log(findLongestWord("JavaScript is awesome!")); // "JavaScript"