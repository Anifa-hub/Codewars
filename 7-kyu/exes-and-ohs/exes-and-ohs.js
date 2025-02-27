function XO(str) {
    let xCount = (str.toLowerCase().match(/x/g) || []).length
    let oCount = (str.toLowerCase().match(/o/g) || []).length
    console.log(oCount)
​
    if(xCount === oCount){
        return true
    }else if(xCount === 0 && oCount ===0){
        return true
    }else {
        return false
    }
}