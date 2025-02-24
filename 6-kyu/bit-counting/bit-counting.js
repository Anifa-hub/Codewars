var countBits = function(n) {
 const base = (n).toString(2).split('');
   console.log(base)
   const result = base.reduce((sum, num) => sum + Number(num), 0);
   
   return result;
};
};