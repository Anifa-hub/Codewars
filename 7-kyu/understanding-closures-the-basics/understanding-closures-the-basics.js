function buildFun(n){
​
  let res = []
​
  for (let i = 0; i< n; i++){
    res.push(function(n){
      console.log(i)
    })
  }
  return res
}