function buildFun(N) {
  var arr = [];
  
  for (var i = 0; i < N; i++) {
    (function(j) {
      arr.push(function() {
        return j;
      });
    })(i); 
  }
  return arr;
}