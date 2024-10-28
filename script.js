// Get Vowel Count

function getVowelCount(sentence) {
  let vowelCount = 0;
  let sentenceArr = Array.from(sentence);

  for (let j = 0; j < sentenceArr.length; j++) {
    let element = sentenceArr[j];

    if (element === 'a') {
      vowelCount += 1;
    }
       if (element === 'e') {
      vowelCount += 1;
    }

     if (element === 'i') {
      vowelCount += 1;
    }

     if (element === 'o') {
      vowelCount += 1;
    }

     if (element === 'u') {
      vowelCount += 1;
    }
  }


  return vowelCount;
}

console.log(getVowelCount("hello world")); // 3
console.log(getVowelCount("JavaScript is awesome!")); // 8
console.log(getVowelCount("Why?")); // 0

/*

let sentence = "Hello World";
let sentenceArr = Array.from(sentence);
console.log(sentenceArr);
// console.log(sentence.includes("o"));

*/
