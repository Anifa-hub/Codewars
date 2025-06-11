function firstDup (s) {
  let letters = s.split('')
  for(let letter of letters){
    if(letters.indexOf(letter)!== letters.lastIndexOf(letter)){
      return letter
    }
  }
}