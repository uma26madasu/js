/*String Methods
In this lesson, we'll dive into methods that make handling strings easier and more efficient.

Text Case
The methods toUpperCase() and toLowerCase() convert all characters of a string to upper and lower case, respectively, and return the modified string. Here's how they work:

let title = 'Working with Strings';

console.log(
  title.toLowerCase(), // outputs 'working with strings'
  title.toUpperCase() // outputs 'WORKING WITH STRINGS'
  title, // 'Working with Strings'
);

Importantly, these methods are applicable to letters only. To check, if a character is a letter, use below feature:

function isLetter(ch) {
  return ch.toLowerCase() !== ch.toUpperCase();
}

console.log(
  isLetter('a'), // true
  isLetter('B'), // true
  isLetter('1'), // false
  isLetter(','), // false
  isLetter(' '), // false
);

Replacing All Occurrences
The replaceAll method replaces every instance of a specified substring in a string with another given substring. It takes two arguments, first — the substring to find, second — the replacement string. Here's an example:

let title = 'Working with Strings';

console.log(
  title.replaceAll(' ', '-'), // 'working-with-strings'
  title.replaceAll('with', '**'), // 'working–**-strings'
);

replaceAll() is case-sensitive, so it only replaces instances that exactly match the case of the search string.

Substring Search
The includes() method checks if a string contains a certain character or substring. We specify what we're looking for in the method's parameters, like so:

let title = 'Working with Strings';

console.log(
  title.includes(' '), // true
  title.includes('with'), // true
  title.includes('With'), // false
);

includes() is also case-sensitive, meaning it treats uppercase and lowercase letters as distinct.

Searching for an Index
To find the first appearance of a character or substring within a string, you can use the indexOf() method. If the character or substring is present, indexOf() returns the index of its first occurrence. If not, it returns -1.

let title = 'Working with Strings';

console.log(
  title.indexOf(' '), // 7
  title.indexOf('with'), // 8
  title.indexOf('Strings'), // 13
);*/