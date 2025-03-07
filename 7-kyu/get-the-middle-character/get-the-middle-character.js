 
function getMiddle(s) {
  let middle = s.length/2
    return s%2 ==0? s.charAt(middle):s.slice(middle-1,middle+1)
}