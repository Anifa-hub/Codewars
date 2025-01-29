function countWords(str) {
     let count = 0
     let inword=false
     for(let i of str){
         if(i.trim()){
             if(!inword){
                 count++
                 inword=true
             }
         }else{
             inword =false
         }
     }
       return count
   }
   console.log(countWords('Dear Victoria, I love  to press   space button.'))