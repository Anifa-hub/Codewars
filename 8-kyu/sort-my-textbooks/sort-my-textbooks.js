 
const sorter = (textbooks) => textbooks.sort((a, b) => (a.charCodeAt(0) !== b.charCodeAt(0) ? a.charCodeAt(0) - b.charCodeAt(0) : a.localeCompare(b)));