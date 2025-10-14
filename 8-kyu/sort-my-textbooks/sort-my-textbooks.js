 
const sorter = (textbooks) => textbooks.sort((a, b) => {
    // Check if the first character's unicode value is lower (e.g., '$' is lower than '*')
    if (a.charCodeAt(0) !== b.charCodeAt(0)) {
        return a.charCodeAt(0) - b.charCodeAt(0);
    }
    // If the first char is the same, fall back to alphabetical
    return a.toLowerCase().localeCompare(b.toLowerCase());
});