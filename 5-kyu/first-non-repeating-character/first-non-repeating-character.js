 
function firstNonRepeatingLetter(s) {
  let letters = s.split('')
  for(let letter of letters){
   return letters.indexOf(letter) === letters.lastIndexOf(letter))? letter : ""
  }
}
console.log(firstNonRepeatingLetter("andinda"))