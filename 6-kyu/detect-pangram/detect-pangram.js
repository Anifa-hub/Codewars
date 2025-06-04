function isPangram(string){
    let regx = /[a-z]/gi
    let match = string.match(regx).map(val=>val.toLowerCase())
    let array = [
  'a', 'b', 'c', 'd', 'e', 'f',
  'g', 'h', 'i', 'j', 'k', 'l',
  'm', 'n', 'o', 'p', 'q', 'r',
  's', 't', 'u', 'v', 'w', 'x',
  'y', 'z'
]
let array2=[...array]
for(let item of array){
    if(match.indexOf(item) !== -1){
        array2.shift()
    }else{
        return false
    }
}
return array2.length === 0
}