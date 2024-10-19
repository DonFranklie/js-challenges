function redundant(str) {


  return () => {
    return str;
  }
}

const f1 = redundant("Apple");

console.log(f1());