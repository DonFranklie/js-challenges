// Number of Boomerangs

function countBoomerangs(array) {
  let numberOfBoomerangs = 0;

  theLoop:
  for (let i = 0; i < array.length; i++) {
    const element1 = array[i];
    const element2 = array[i+1];
    const element3 = array[i+2];

    if (element1 === element3 && element1 !== element2) {
      numberOfBoomerangs += 1;
    } else {
      continue theLoop;
    }
    
  }


  return numberOfBoomerangs;
}

console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]));
console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]));
console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]));