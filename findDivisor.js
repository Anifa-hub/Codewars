function shortCut (number,b){
    let remain=[]
         if(number[0]%b ===0 || number[1]%b ===0 || number[2]%b ===0 || number[3]%b ===0){
             remain.push(number) 
         }else{
             console.log('')
         }
     return remain
     
 }
 console.log(shortCut([2,4,5,6],2))