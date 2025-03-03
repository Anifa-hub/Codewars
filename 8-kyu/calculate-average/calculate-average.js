function findAverage(array) {
  
  let total = 0
  if(array.length == 0){
    return 0;
  } else{
    for(let arr of array){
      total += arr
    }
    return total/array.length
  }
  
}