function firstNonRepeatingLetter(s) {
  let letters = s.split('')
  let room =[]
  for(let letter of letters){
    if(letters.indexOf(letter)== letters.lastIndexOf(letter)){
      room.push(letter)
    }
       ""
  }
  return room.join('')
}