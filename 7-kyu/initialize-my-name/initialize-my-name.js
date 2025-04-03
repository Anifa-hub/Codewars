 
function initializeNames(name){
  var arr = name.split(' ');
   for (var i = 1; i < arr.length ; i++) 
       arr[i] = arr[i].charAt(0) + '.';
   return arr.join(' ');
}