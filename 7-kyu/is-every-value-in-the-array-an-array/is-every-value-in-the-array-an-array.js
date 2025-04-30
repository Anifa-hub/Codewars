const arrCheck = value => {
​
   if (!Array.isArray(value)) {
    return false;
  }
​
  return value.every(element => Array.isArray(element));
}