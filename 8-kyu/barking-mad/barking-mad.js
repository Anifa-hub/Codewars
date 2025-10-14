// Define the Dog constructor function (needed before creating instances)
function Dog(breed) {
  this.breed = breed;
}
​
// 1. Add the bark method to the Dog prototype.
// This ensures ALL Dog instances (Snoopy, Scooby-Doo, and new ones) inherit this method.
Dog.prototype.bark = function() {
  return "Woof";
};
​
// 2. Correctly initialize the instances.
var snoopy = new Dog("Beagle");
var scoobydoo = new Dog("Great Dane");
​
// 3. (Optional step) Delete the custom 'bark' method set on the Snoopy instance 
// so it uses the inherited prototype method.
// NOTE: If you just run the code without the original incorrect definitions, 
// this step is unnecessary. If you must use the original structure, 
// the line below fixes the override.
// delete snoopy.bark; 
​
// Test the bark method
console.log("Snoopy's bark:", snoopy.bark());   // Should return "Woof"