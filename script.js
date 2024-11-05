function removeDuplicates(s) {
  if (s.length === 1) return s;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(s[i])
    }
    
  }

  return stack.join("");
}

console.log(removeDuplicates("abbaca"));
console.log(removeDuplicates("azxxzy"));

const newSet = new Set([1,2,3,[4,4], [4,4],5,5,4]);

console.log(newSet);