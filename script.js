
function flattenAndSort(array) {
  // Step 1: Flatten the array using reduce
  const flattenedArray = array.reduce((acc, curr) => acc.concat(curr), []);
  
  // Step 2: Sort the flattened array in ascending order
  return flattenedArray.sort((a, b) => a - b);
}


console.log(flattenAndSort([[3, 1000, 2, 1], [4, 6, 5], [], [9, 7, 8]])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]])); // [1, 2, 3, 4, 5, 6, 100]
console.log(flattenAndSort([[], []])); // []


let array = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];
let newArr = array.flat().sort();

// console.log(newArr);