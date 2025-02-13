/*Iteration with Index
To iterate over the characters in a string, we can use a for loop and iterate over indices from 0 to the last one. Usually, the loop variable is named i, short for index. For example:

const title = 'String';

for (let i = 0; i < title.length; i++) {
  console.log(title[i]);
}

The console will output:

S
t
r
i
n
g

If we don't need all characters, we can both start the iteration from a later and conclude the iteration prematurely. 
For instance:

const title = 'String';

for (let i = 2; i < 5; i++) {
  console.log(title[i]);
}
  
Reverse Order Iteration
To iterate over the characters in reverse order, start from the last index and decrease it in the loop:

const title = 'String';

for (let i = title.length - 1; i >= 0; i--) {
  console.log(title[i]);}
  Reverse Order Iteration
To iterate over the characters in reverse order, start from the last index and decrease it in the loop:

  const title = 'String';

for (let char of title) {
  console.log(char);
}
  
Counting Characters
Using a loop, we can count the number of specific characters in a string, such as spaces:    
const text = 'Working with Strings';
let spacesCount = 0;

for (let char of text) {
  // counting the number of spaces in the string
  if (char === ' ') {
    spacesCount++;
  }
}

console.log(spacesCount);

Removing Characters from a String
We can't modify an existing string,
but we can create a new string and fill it with the desired characters. 
Here's a loop that copies all characters to a new string except spaces:
const text = 'Working with Strings';
let result = ''; 

for (let char of text) {
  if (char !== ' ') {
    // adding everything except spaces
    result += char;
  }
}

console.log(result); // 'WorkingwithStrings'

Replacing Characters Using a Loop
Sometimes while working with strings, we may need to replace spaces with other characters, like hyphens. 
This can be useful when creating URL slugs. A for loop will be perfect for this purpose:*/

let title = 'Working with Strings';
let result = '';

for (let i = 0; i < title.length; i++) {
  if (title[i] === ' ') {
    result += '-';
  } else {
    result += title[i];
  }
}

console.log(result);

