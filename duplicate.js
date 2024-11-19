/*let arr= [2,2,4,5,6,]
let duplicate = arr.filter((an,id) => arr.indexOf(an) === id);
console.log(duplicate)*/
//other way
function arr (number){
    return[...new Set(number)]
    
}
console.log(arr([1,2,2,4,5,2]))