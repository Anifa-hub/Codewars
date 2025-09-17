function longer(s) {
  // 1. Split the string into an array of words
  return s.split(' ')
    // 2. Sort the array using a custom comparison function
    .sort((a, b) => {
      // Primary sort: by word length (ascending)
      if (a.length !== b.length) {
        return a.length - b.length;
      }
      // Secondary sort: alphabetical (case-sensitive)
      return a.localeCompare(b);
    })
    // 3. Join the sorted array back into a string
    .join(' ');
}
​