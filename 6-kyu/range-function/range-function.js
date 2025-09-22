let range =(start, step, stop) =>{
  let s, st, sp;
​
  if (stop !== undefined) {
    s = start;
    st = step;
    sp = stop;
  } else if (step !== undefined) {
    s = start;
    st = 1;
    sp = step;
  } else {
    s = 1;
    st = 1;
    sp = start;
  }
​
  return {
    *[Symbol.iterator]() {
      for (let i = s; i <= sp; i += st) {
        yield i;
      }
    },
  };
}