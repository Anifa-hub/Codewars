function betterThanAverage(classPoints, yourPoints) {
  let classAverage = (classPoints.reduce((sum,current)=>sum+current,0))/classPoints.length
  return yourPoints > classAverage
}
​