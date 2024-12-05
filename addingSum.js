function positiveSum(arr) {
  let room =0
  for(let i=0; i<arr.length; i++){
    
  if(arr[i]>0){
    room += arr[i]
  }
    
  }
  return room
}