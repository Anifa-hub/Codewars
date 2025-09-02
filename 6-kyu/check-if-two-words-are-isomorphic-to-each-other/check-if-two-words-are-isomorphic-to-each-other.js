function isomorph(a, b) {
  
 if (a.length !== b.length) {
    return false;
  }
​
  const mapA = new Map();
  const mapB = new Map();
​
  for (let i = 0; i < a.length; i++) {
    const charA = a[i];
    const charB = b[i];
​
    // Check mapping from s to t
    if (mapA.has(charA)) {
      if (mapA.get(charA) !== charB) {
        return false;
      }
    } else {
      mapA.set(charA, charB);
    }
​
    // Check mapping from t to s
    if (mapB.has(charB)) {
      if (mapB.get(charB) !== charA) {
        return false;
      }
    } else {
      mapB.set(charB, charA);
    }
  }
​
  return true;
}
​
​