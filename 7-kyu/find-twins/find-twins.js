function elimination(arr){
   let valuesAlreadySeen = []
​
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i]
    if (valuesAlreadySeen.indexOf(value) !== -1) {
      return value
    }
    valuesAlreadySeen.push(value)
  }
  return null
}
​