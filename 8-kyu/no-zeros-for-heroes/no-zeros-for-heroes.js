function noBoringZeros(n) {
  let num = n.toString().slice(-1)
  if(num==0){
      return Number (n.toString().slice(0, -1))
  }
  
}