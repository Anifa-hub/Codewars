function arrayPlusArray(arr1, arr2) {
  let newaray= ([...arr1,...arr2])
  let add = 0
  for(let i=0; i<newaray.length; i++){
    add+=newaray[i]
  }
  return add
}
​