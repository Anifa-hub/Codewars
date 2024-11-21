function count(input){
    if(input === null) return[]
let countSum= 0
let negativeAdd =0
for (let i =0; i<input.length; i++){
    if(input[i]>0){
        countSum ++
    }else if(input[i]<0){
        negativeAdd += input[i]
    }
}
return input !== 0 ? [countSum,negativeAdd] :[]
}
console.log (count([1,2,3,4,-3,-2]))