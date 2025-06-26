function findUniq(arr) {
  return +arr.filter((e)=>arr.indexOf(e)===arr.lastIndexOf(e))
}
​