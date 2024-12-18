function mergeArrays(arr1, arr2){
    return [...new Set([...arr1,...arr2])]
  
}
  console.log(mergeArrays([1,2,7],[5,8,2]).sort()) //(this sort help to ascemble it)
  // another way you can merge using concat
  function mergerArray(arra1,arra2){
    let arra3 = arra1.concat(arra2).sort((a,b)=>a-b);
    return[...new Set(arra3)] 
}
console.log(mergerArray([1,2,2,2,3,],[4,5,6]))