function deepClone(object) {
  let deepClone = structuredClone(object);

  return deepClone;
}

const original = {
  name: "Alice",
  age: 25,
  hobbies: ["reading", "hiking"],
  address: {
    city: "Wonderland",
    zip: "12345",
  },
};

const clone = deepClone(original);
clone.name = "Bob";
clone.address.city = "Dreamland";

console.log(original.name); // "Alice"
console.log(original.address.city); // "Wonderland"
console.log(clone.name); // "Bob"
console.log(clone.address.city); // "Dreamland"
