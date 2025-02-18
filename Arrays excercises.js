/*Countries Array
Create an array countries with 3 countries you'd like to visit. 

let countries = ['India','UK','Brazil'];
console.log(countries)

Array Length
Using length, print the number of elements in the distances array to the console.
let distances = [3, 20, 34, 56, 1];
console.log(distances.length);
Second Element
We've created an array of flowers with flower names. Output the array's second element to the console.

let flowers = ['rose', 'tulip', 'sunflower', 'daisy', 'lily', 'lilac', 'orchid'];
console.log(flowers[1]);
Replace Second Element
Replace the array's second element with 'peony' using its index.

let flowers = ['rose', 'tulip', 'sunflower', 'daisy', 'lily', 'lilac', 'orchid'];
flowers[1] = 'peony';
console.log(flowers);

Add Fruits
Use the push method to add two fruits names — anything you'd like — to the end of the fruits array.

let fruits = ['apple', 'orange', 'pineapple', 'mango'];
fruits.push('watermelon','grapes');
console.log(fruits);

Write a function getLargestNumber that:

Takes a non-empty array numbers.
Returns the largest number stored in this array.

 /** This comment gives you autocompletion
 * 
 * @param {number[]} numbers
 * @returns {number} The largest number in the array
 */
/*function getLargestNumber(numbers) {
    return Math.max(...numbers);
  }*/
  // Example usage:
  //console.log(getLargestNumber([10, 5, 20, 8])); // Output: 20
  //console.log(getLargestNumber([-3, -1, -7, -5])); // Output: -1*/

 /* Write a function splitWords that:

Takes a text string with words, each separated by a single space.
Returns an array of individual words.*/
/*This comment gives you autocompletion
 @param {string} text
  @returns {string[]} An array of words from the text

function splitWords(text) {
    return text.split(" ");
  }
  
  // Example usage:
  console.log(splitWords("Hello world this is JavaScript")); 
  // Output: [ 'Hello', 'world', 'this', 'is', 'JavaScript' ]
  
  console.log(splitWords("split these words")); 
  // Output: [ 'split', 'these', 'words' ]
  Write a function joinWords that:

Accepts an array of strings words, and a joining character glue.
Returns a string with all words elements joined together with glue.
This comment gives you autocompletion
 * 
 * @param {string[]} words
 * @param {string} glue
 * @returns {string} The words joined with the glue character
 function joinWords(words, glue) {
    return words.join(glue);
  }
  
  // Example usage:
  console.log(joinWords(["Hello", "world", "this", "is", "JavaScript"], " ")); 
  // Output: "Hello world this is JavaScript"
  
  console.log(joinWords(["apple", "banana", "cherry"], "-")); 
  // Output: "apple-banana-cherry"
  Write a function checkWord that:

Takes an array of strings words and a string word.
If word is found in the words array, returns true, otherwise — returns false.*/
/**
 * This comment gives you autocompletion
 * 
 * @param {string[]} words
 * @param {string} word
 * @returns {boolean} True if word is found, otherwise false
 */
function checkWord(words, word) {
    return words.includes(word);
  }
  
  // Example usage:
  console.log(checkWord(["apple", "banana", "cherry"], "banana")); // Output: true
  console.log(checkWord(["apple", "banana", "cherry"], "grape"));  // Output: false
  