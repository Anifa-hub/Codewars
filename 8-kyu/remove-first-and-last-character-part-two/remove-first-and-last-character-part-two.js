function array(string) {
  if (string === null || string === undefined || string.length === 0) {
    return null; 
  }
​
  const parts = string.split(',');
​
  if (parts.length <= 2) {
    return null; 
  }
​
  return parts.slice(1, -1).join(' ');
}