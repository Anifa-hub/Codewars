var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
 var arr = [];
    for (var i=0;i<iterable.length;i++) {
​
    // check if there is back to back letter
    if (iterable[i] !== iterable[i+1]) {
​
        // if not, push the current value to arr
      arr.push(iterable[i]);
    }
  }
  return arr;
  
  }
​