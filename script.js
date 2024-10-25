// Oddish vs. Evenish

function oddishOrEvenish(num) {
  let number = num.toString();
  number = number.split('');
  let sum = 0;

  for (let i = 0; i < number.length; i++) {
    const element = number[i];
    sum += Number(element);
    
  }

  if (sum % 2 === 0 ) {
    return 'Evenish';
  } else {
    return 'Oddish';
  }

}

console.log(oddishOrEvenish(43));
console.log(oddishOrEvenish(373));
console.log(oddishOrEvenish(4433));