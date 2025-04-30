function isArray(arr) {
  // This is what we would like to do, but it's not allowed.
  return Object.prototype.toString.call(arr) === '[object Array]'
}