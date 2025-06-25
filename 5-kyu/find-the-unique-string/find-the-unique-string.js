function findUniq(arr){
    let ans = arr.map((x)=>[...new Set(x.toUpperCase().split(''))].sort().join(''))
let final = ans.indexOf(ans.filter((e)=> ans.indexOf(e)===ans.lastIndexOf(e) ).join(''))
    return arr[final]
} 
​