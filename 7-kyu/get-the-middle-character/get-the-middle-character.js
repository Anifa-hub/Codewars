function getMiddle(s) {
  let middle = s.length/2
  if(s.length %2 == 1){
      return  s.charAt(middle)
  }else{
      return s.slice(middle-1, middle+1)
  }
  
  
}