function XO(str) {
    let x = (str.lowerCase().match(/x/g)||[]).length()
    let o = (str.lowerCase().match(/o/g) || []).length()
    
    if(x === o){
        return true
    }else if(x === 0 && o ===0){
        return true
    }else {
        return false
    }
}
}