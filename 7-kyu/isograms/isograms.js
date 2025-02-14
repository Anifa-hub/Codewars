function isIsogram(str){
  let string = str.split('')
  if([...new Set(string)]){
    return true
  } else {
    return false
  }
}