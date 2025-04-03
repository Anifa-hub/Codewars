 
function initializeNames(name){
  let arr = name.split(' ');
   for (let i = 0; i < arr.length ; i++) 
       arr[i] = arr[i].charAt(0) + '.';
   return arr.join(' ');
}