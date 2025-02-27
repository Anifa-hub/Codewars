function moveZeros(arr) {
  let array =[]
  for(let ar of arr){
    if(ar ==0){
      return array.push(arr.splice(ar))
    }
  }
}