## Today's Challenge: Area of a Triangle
Write a function that takes the base and height of a triangle and return its area.

```javascript
triArea(3, 2) ➞ 3

triArea(7, 4) ➞ 14

triArea(10, 10) ➞ 50
```




## Challenge on Hold:
Write a function called **flattenAndSort** that takes a two-dimensional array of numbers (an array containing other arrays of numbers) and returns a single, flat array of numbers, sorted in ascending order.

### Requirements:

1. Flatten the array to remove all nested levels.
2. Sort the numbers in ascending order.

```javascript
console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]])); // [1, 2, 3, 4, 5, 6, 100]
console.log(flattenAndSort([[], []])); // []
```

## Challenge 2 {Put on Hold}:
Write a function called **capitalizeWords** that takes a sentence as input and returns the sentence with the first letter of each word capitalized.

### Requirements:

Ensure that only the first letter of each word is capitalized, and the rest are lowercase.
Assume that words are separated by single spaces and handle mixed-case inputs.
Example:

```javascript
console.log(capitalizeWords("hello world")); // "Hello World"
console.log(capitalizeWords("javaScript is fun")); // "Javascript Is Fun"
console.log(capitalizeWords("HELLO from the OTHER SIDE")); // "Hello From The Other Side"
```
Hint: Try using **split**, **map**, and **join** to make it concise.