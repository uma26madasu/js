/*Arrays
Up until now, we've dealt with variables holding strings, numbers, or boolean values (true and false). But sometimes, we need to group multiple values, such as a list of cities, a compilation of tasks, or any other collection of related items. Arrays let us do exactly that: They're a type of data structure that holds multiple values in a single variable.

Creating an Array
We create an array using square brackets [], within which we place the values, separated by commas:

let cities = ['Kyiv', 'London', 'Paris'];

When we display an array in the console, the values appear as a list, wrapped in square brackets and separated by commas:

let cities = ['Kyiv', 'London', 'Paris'];

console.log(cities); // the screen will display ['Kyiv', 'London', 'Paris']

Tuple
Arrays typically consist of homogeneous elements. For instance, an array of distances to nearby cities might be represented as:

let distances = [10, 30, 50];

However, there are times when an array holds related values of various types, such as details about a person or a product. We call such an array with mixed types a tuple. Here's an example:

let person = ['John', 25, false]; // tuple

Array Length
An array's length refers to the total number of elements it contains. To find out the length of an array, we use the length property. For example:

let cities = ['Kyiv', 'London', 'Paris'];

console.log(cities.length); // the console will display 3

Accessing an Element by Index
You can access an array element by using its index within square brackets. Index counting starts from zero. For instance:

let cities = ['Kyiv', 'London', 'Paris'];

console.log(cities[0]); // the console will display 'Kyiv'
console.log(cities[1]); // the console will display 'London'

The index of the last element is always one less than the array's length:

let cities = ['Kyiv', 'London', 'Paris'];

console.log(cities[cities.length - 1]); 
Replacing an Element by Index
We can modify an array element through its index by simply assigning it a new value. For example:

let cities = ['Kyiv', 'London', 'Paris', 'Tokyo'];

cities[2] = 'New York';

console.log(cities); // the console will display ['Kyiv', 'London', 'New York', 'Tokyo']

Adding an Element at the End of the Array
To append a new element to the array's end, we can assign it to an index equal to the array's current length:

let cities = ['Kyiv', 'London', 'Paris', 'Tokyo'];

cities[cities.length] = 'New York';

console.log(cities); // the console will display ['Kyiv', 'London', 'Paris', 'Tokyo', 'New York']

Alternatively, we can use the push() method to add one or more new elements to the array's end. These elements will be placed after the last existing one:

let cities = ['Kyiv', 'London', 'Paris', 'Tokyo'];

cities.push('Amsterdam', 'New York');

console.log(cities); // the console will display ['Kyiv', 'London', 'Paris','Amsterdam','New York']*/