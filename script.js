// Seven Boom: Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

function sevenBoom(array) {
  let arrString = array.toString();
  // let arrString1 = arrString.split("");


    if (arrString.includes("7") ) {
      return "Boom";
    } else {
      return "there is no 7 in the array";
    }
    
 }

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));
console.log(sevenBoom([8, 6, 33, 100]));
console.log(sevenBoom([2, 55, 60, 97, 86]));

// const whatArray = [1,2,3,4,5,6,7];
// const newArr = whatArray.toString();

// console.log(newArr.includes('7'));

