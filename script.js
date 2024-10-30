// Array Sum

function arraySum(array) {
  let positivesArray = array.filter(x => x > 0);
  let sumOfArray = positivesArray.reduce((acc, value) => acc + value, 0);

  return sumOfArray;
}

console.log(arraySum([1, -4, 7, 12])); // 20
console.log(arraySum([-3, -2, -1, 0])); // 0
console.log(arraySum([])); // 0