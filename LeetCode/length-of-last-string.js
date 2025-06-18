// Given a string s consisting of words and spaces, return the length of the last word in the string.

var lengthOfLastWord = function(s) {
    const words = s.trim().split(/\s+/);
    return words[words.length - 1].length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  ")); // Output: 4