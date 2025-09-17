function longer(s) {
  return s.split(' ').sort((a, b) => {
    // Sort by length in ascending order
    if (a.length !== b.length) {
      return a.length - b.length;
    }
    // If lengths are equal, sort alphabetically,
    // ensuring lowercase comes after uppercase for the same letter.
    // This custom comparison handles 'Hello' before 'hello'.
    const minLength = Math.min(a.length, b.length);
    for (let i = 0; i < minLength; i++) {
      const charA = a.charCodeAt(i);
      const charB = b.charCodeAt(i);
​
      if (charA !== charB) {
        // Direct ASCII comparison works for 'Hello' < 'hello'
        return charA - charB;
      }
    }
    // If one is a prefix of the other (e.g., "a" vs "aa"), shorter comes first
    return a.length - b.length;
  }).join(' ');
}
​
​