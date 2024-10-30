## Challenge:
Write a function called **arraySum** that takes an array of numbers as input and returns the sum of only the positive numbers. If the array is empty or there are no positive numbers, the function should return **0**.

Requirements:

Only add positive numbers (greater than zero) to the sum.
If the array contains negative numbers or zeros, ignore them.
Example:

```javascript
console.log(arraySum([1, -4, 7, 12])); // 20
console.log(arraySum([-3, -2, -1, 0])); // 0
console.log(arraySum([])); // 0
```
Hint: Use array methods like filter and reduce to make it more concise.