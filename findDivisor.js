function divisibleBy(numbers, divisor){
  
    let remain =[]
   for (let i=0; i<numbers.length; i++){
   
        if(numbers[i]%divisor===0){
            remain.push(numbers[i])
        }else{
            console.log('')
        }
        
}
 return remain  
}
console.log(divisibleBy([2,4,5,6,7],2))