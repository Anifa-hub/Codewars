function isPalindrome(x) {
  return x.toUpperCase().split('').reverse().join('')===x.toUpperCase()? true:false
}