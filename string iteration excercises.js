/*Print Characters
The title variable contains a string. Use a loop to print this string to the console, 
one character per iteration, from first to last.

const title = 'Strings';
for (let i = 0; i<title.length;i++)
{console.log(title[i])};

Write a printFromTo function that:

Accepts three parameters: input, start, and end.
Prints the characters of the input string to the console from the start to the end indexes, inclusive.

function printFromTo(input, start, end) {
    for (let i = start; i <= end && i < input.length; i++) {
        console.log(input[i]);
    }
}
printFromTo("JavaScript", 2, 6);
Print Backwards


Write a function printBackwards that:
Takes three parameters: input, start, and end
Prints the characters of the input string to the console in reverse, 
i.e.: from the index end to start indexes, inclusive.
function printBackwards(input, start, end) {
    for (let i = end; i >= start; i--) {
      console.log(input[i]); // Print each character in reverse order
    }
  }
  
  // Example usage:
  printBackwards("Hello, World!", 2, 6); // Output: "l", "l", "e", " ", "o"

  The replaceSpaces function takes a string input.

Modify the function by adding a for loop that replaces each space in input with a hyphen -.
Return the modified string from the function.
function replaceSpaces(input) {
    let result = ""; // Initialize an empty string to store the modified result
    
    for (let i = 0; i < input.length; i++) {
      if (input[i] === " ") {
        result += "-"; // Replace space with a hyphen
      } else {
        result += input[i]; // Keep the original character
      }
    }
    
    return result; // Return the modified string
  }
  
  // Example usage:
  console.log(replaceSpaces("Hello World")); // Output: "Hello-World"
  console.log(replaceSpaces("JavaScript is fun")); // Output: "JavaScript-is-fun"
  Write a function replaceA that:

Takes a string input.
Replaces all a and A letters with *.
Returns the resulting string.

function replaceA(input) {
    let result = ""; // Initialize an empty string to store the modified result
  
    for (let i = 0; i < input.length; i++) {
      if (input[i] === "a" || input[i] === "A") {
        result += "$"; // Replace 'a' or 'A' with '*'
      } else {
        result += input[i]; // Keep the original character
      }
    }
  
    return result; // Return the modified string
  }
  
  // Example usage:
  console.log(replaceA("JavaScript")); // Output: "J*v*Script"
  console.log(replaceA("Amazing Apples")); // Output: "*m*zing *pples"
  console.log(replaceA("BANANA")); // Output: "B*N*N*"
  
  Count Ms


Implement the countMs function that:

Takes the text string
Returns the number of uppercase M and lowercase m letters combined.*/
function countMs(text) {
    let count = 0; // Initialize a counter
    
    for (let i = 0; i < text.length; i++) {
      if (text[i] === "M" || text[i] === "m") {
        count++; // Increment count for each 'M' or 'm'
      }
    }
    
    return count; // Return the total count
  }
  
  // Example usage:
  console.log(countMs("Mango Mango Mmm")); // Output: 5
  console.log(countMs("My mom makes muffins")); // Output: 4
  console.log(countMs("Hello World")); // Output: 0
  