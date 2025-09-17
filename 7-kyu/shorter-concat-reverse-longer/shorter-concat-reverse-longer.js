function shorterReverseLonger(a,b){
  let first = a.length
  let second = b.length
  if(first<second){
    return a+b.split('').reverse().join('')+a
  }else{
    return b+a.split('').reverse().join('')+b
  }
}