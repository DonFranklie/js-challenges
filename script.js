function countTrue(array) {
  let numTrue = 0;

  for (let j = 0; j < array.length; j++) {
    let item = array[j];

    if (item === true) {
      numTrue += 1
    }
  }

  return numTrue;
}

console.log(countTrue([true, false, false, true,false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));
