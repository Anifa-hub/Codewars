function highAndLow(numbers){

    let number = numbers.split(' ').map(Number);
    let high = number.reduce((a,b)=>Math.max(a,b))
    let low = number.reduce((a,b)=>Math.min(a,b))
  return `${high} ${low}`
  }