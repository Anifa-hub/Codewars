function nthFibo(n) {
  let room =[0,1]
  for(let i=0; i<n; i++){
    room.push(room.slice(-2).reduce((sum,next)=>sum+next))
  }
  return room[n-1]
}