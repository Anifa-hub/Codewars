function buildFun(N) {
  var arr = [];
  // Must use 'var' here as we rely on the IIFE for scoping
  for (var i = 0; i < N; i++) {
    // The IIFE creates a new scope and takes 'i' as an argument,
    // storing it in the locally scoped variable 'j'.
    (function(j) {
      arr.push(function() {
        return j;
      });
    })(i); // Immediately execute the function, passing 'i'
  }
  return arr;
}