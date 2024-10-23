function fiscalCodeCreator(obj) {
  let fiscalCode = ``;

  function surnameCode() {
    let surname  = obj.surname.toUpperCase();

  }

  surnameCode();


  return fiscalCode;
}

const consonants = 'bcdfghjklmnpqrstvwxyz';


function surname(str) {
  let newStr = Array.from(str.toUpperCase());
  let surnameInit = 'q';
  const newConsonants = Array.from(consonants);
  let numberOfConsonants = 0;

    for (let j = 0; j < newStr.length; j++) {
      const item = newStr[j];

      for (let i = 0; i < newConsonants.length; i++) {
        const element = newConsonants[i];

        if (element === item) {
          numberOfConsonants++;
          surnameInit += item; 
        }
        
         
  }
    
    // return surnameInit;
    // return newStr;
    return numberOfConsonants;


}
}

console.log(surname("Wello"));

// console.log(Array.from(consonants).length);

if (navigator.userAgent === '') {
  console.log(navigator.platform);
} else {
  console.log(navigator.userAgentData.platform);
}