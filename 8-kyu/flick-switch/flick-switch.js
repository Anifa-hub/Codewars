function flickSwitch(arr){
  let currentState = true
  const result = []
​
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'flick') {
      currentState = !currentState
    }
    result.push(currentState)
  }
​
  return result;
​
   
}