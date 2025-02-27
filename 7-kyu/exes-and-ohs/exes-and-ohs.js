function XO(str) {
    let x = (str.toLowerCase().match(/x/g)||[]).length()
    let o = (str.toLowerCase().match(/o/g) || []).length()
    
    if(x === o){
        return true
    }else if(x === 0 && o ===0){
        return true
    }else {
        return false
    }
​
}