 
let range =(start, step, stop) =>{
  let [s, st, sp] = [1, 1, 1];
​
  // Logic to determine the parameters
  if (stop === undefined) {
    sp = start;
  } else if (step === undefined) {
    [s, sp] = [start, step];
  } else {
    [s, st, sp] = [start, step, stop];
  }
​
  // The generator function
  return {
    *[Symbol.iterator]() {
      for (let i = s; i <= sp; i += st) {
        yield i;
      }
    },
  };
}