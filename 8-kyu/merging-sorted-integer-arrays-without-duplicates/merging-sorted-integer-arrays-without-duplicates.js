function mergeArrays(a, b) {
 
  return Array.from( new Set([...a,...b])).sort((a,b)=>a-b)
}
​