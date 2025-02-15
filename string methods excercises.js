/*Write a convertToLowerCase function that:

Takes a string input.
Returns it in lowercase.

function convertToLowerCase(str) {
    return str.toLowerCase();
}
console.log(convertToLowerCase("Hello World!")); 

Write a function convertToUpperCase that:

Takes a string input.
Returns the contents of the string in UPPERCASE.
function convertToUpperCase(input) {
  return input.toUpperCase(); // Convert the string to uppercase
}

Write a function restoreSpaces that:

Takes a string input.
Replaces every instance of - with a space.
Returns the resulting string.

/**
 * Replaces every instance of '-' with a space in the given string.
 * 
 * @param {string} input - The input string containing hyphens.
 * @returns {string} - The modified string with hyphens replaced by spaces.
 
function restoreSpaces(input) {
    return input.replaceAll("-", " "); // Replace all hyphens with spaces
  }
    Create a isSubstring function that:

Takes two strings, phrase and part.
Returns the following:
true, if phrase contains part.
false, if phrase does not contain part.
💡 Your function should be case-sensitive, i.e.: consider uppercase and lowercase letters to be different.

/**
 * Checks if 'part' is a substring of 'phrase'.
 * 
 * @param {string} phrase - The main string to search in.
 * @param {string} part - The substring to look for.
 * @returns {boolean} - Returns true if 'part' is found in 'phrase', otherwise false.
function isSubstring(phrase, part) {
    return phrase.includes(part); // Check if 'phrase' contains 'part'
  }
    Create a function getPosition that:

    Takes two strings: text and word.
    Returns the index of the first word that occurs in text.
    If word isn't found in text, the functon should return -1.
/**
 * Finds the index of the first occurrence of 'word' in 'text'.
 * 
 * @param {string} text - The main string to search in.
 * @param {string} word - The word to find.
 * @returns {number} - The index of the first occurrence of 'word' or -1 if not found.
 
function getPosition(text, word) {
    return text.indexOf(word); // Returns the index or -1 if not found
  }
    Write a function countLetters, which should:

Accept a string input.
Return the letter count of the string.
💡 Don't count all characters — just the letters.

Example
For the string I'm a little teapot, the letter count should be 15.
/**
 * Counts the number of letters in the given string.
 * 
 * @param {string} input - The string to count letters from.
 * @returns {number} - The count of letters in the string.

function countLetters(input) {
    return input.replace(/[^a-zA-Z]/g, "").length;
  }*/
