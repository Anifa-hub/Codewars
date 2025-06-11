 
function firstNonRepeatingLetter(s) {
  let letters = s.toLowerCase().split('')
  let room =[]
  for(let letter in letters){
    if(letters.indexOf(letters[letter])== letters.lastIndexOf(letters[letter])){
     return s[letter]
      
    }
  }
   return ""
}
console.log(firstNonRepeatingLetter("isaacI"))