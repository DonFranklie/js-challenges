function removeDuplicates(array) {
  let arr = new Set(array);

  return arr;
}

console.log(
  removeDuplicates([1, 2, 3, 4, 4, 5, 5, 6])
);