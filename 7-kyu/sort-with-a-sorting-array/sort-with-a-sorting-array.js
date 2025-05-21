function sort(initialArray, sortingArray) {
   let result = []
   for(let i=0; i<sortingArray.length; i++){
     result.push(initialArray[sortingArray.indexOf(i)])
   }
  return result
}