​
function Dog(breed) {
  this.breed = breed;
}
​
Dog.prototype.bark = function() {
  return "Woof";
};
var snoopy = new Dog("Beagle");
var scoobydoo = new Dog("Great Dane");
console.log("Snoopy's bark:", snoopy.bark());   // Should return "Woof"
console.log("Scooby's bark:", scoobydoo.bark()); // Should return "Woof"
​
​