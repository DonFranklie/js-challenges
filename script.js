function reversedString(string) {
  let newSplitString = string.split("").reverse();

  let reversedString = newSplitString.join("");

  return reversedString;
}

console.log(reversedString("Hello World!"));