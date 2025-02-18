/*Working with Arrays in JavaScript
In JavaScript, an array is a data structure that stores multiple values in a single variable. Arrays can hold different data types (numbers, strings, objects, etc.), and they are zero-indexed (index starts at 0).

1️⃣ Creating an Array
There are multiple ways to create an array:

javascript
Copy
Edit
// Using array literal (recommended)
let fruits = ["Apple", "Banana", "Cherry"];

// Using the Array constructor
let numbers = new Array(1, 2, 3, 4, 5);

// Empty array
let emptyArray = [];
2️⃣ Accessing Elements in an Array
You can access elements using their index:

javascript
Copy
Edit
let colors = ["Red", "Green", "Blue"];
console.log(colors[0]); // Output: "Red"
console.log(colors[2]); // Output: "Blue"

// Modifying an element
colors[1] = "Yellow";
console.log(colors); // Output: ["Red", "Yellow", "Blue"]
3️⃣ Array Properties
length – Get the number of elements
javascript
Copy
Edit
let animals = ["Dog", "Cat", "Elephant"];
console.log(animals.length); // Output: 3
4️⃣ Adding and Removing Elements
Push & Pop (End)
javascript
Copy
Edit
let cities = ["New York", "London"];
cities.push("Paris");  // Adds "Paris" to the end
console.log(cities); // ["New York", "London", "Paris"]

cities.pop();  // Removes last element ("Paris")
console.log(cities); // ["New York", "London"]
Unshift & Shift (Start)
javascript
Copy
Edit
let cars = ["Tesla", "BMW"];
cars.unshift("Audi");  // Adds "Audi" at the start
console.log(cars); // ["Audi", "Tesla", "BMW"]

cars.shift();  // Removes first element ("Audi")
console.log(cars); // ["Tesla", "BMW"]
5️⃣ Iterating Over Arrays
Using for Loop
javascript
Copy
Edit
let numbers = [1, 2, 3, 4];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]); 
}
// Output: 1 2 3 4
Using forEach
javascript
Copy
Edit
numbers.forEach(num => console.log(num));
// Output: 1 2 3 4
6️⃣ Searching in an Array
indexOf() – Find an element's index
javascript
Copy
Edit
let names = ["Alice", "Bob", "Charlie"];
console.log(names.indexOf("Bob")); // Output: 1
console.log(names.indexOf("David")); // Output: -1 (not found)
includes() – Check if an element exists
javascript
Copy
Edit
console.log(names.includes("Charlie")); // Output: true
console.log(names.includes("Eve")); // Output: false
7️⃣ Modifying an Array
slice() – Extract a portion (without modifying the original)
javascript
Copy
Edit
let letters = ["a", "b", "c", "d", "e"];
console.log(letters.slice(1, 4)); // Output: ["b", "c", "d"]
splice() – Add/Remove elements (modifies the original)
javascript
Copy
Edit
let nums = [10, 20, 30, 40];
nums.splice(2, 1, 25); // Removes 1 element at index 2 and adds 25
console.log(nums); // Output: [10, 20, 25, 40]
8️⃣ Combining and Splitting Arrays
concat() – Merge two arrays
javascript
Copy
Edit
let a = [1, 2];
let b = [3, 4];
let combined = a.concat(b);
console.log(combined); // Output: [1, 2, 3, 4]
join() – Convert array to string
javascript
Copy
Edit
let words = ["Hello", "world"];
console.log(words.join(" ")); // Output: "Hello world"
9️⃣ Sorting and Reversing
sort() – Sort alphabetically
javascript
Copy
Edit
let fruits = ["Mango", "Apple", "Banana"];
fruits.sort();
console.log(fruits); // Output: ["Apple", "Banana", "Mango"]
reverse() – Reverse the array
javascript
Copy
Edit
let numbers = [1, 2, 3, 4];
numbers.reverse();
console.log(numbers); // Output: [4, 3, 2, 1]
🔟 Higher-Order Array Methods
map() – Apply a function to each element
javascript
Copy
Edit
let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6]
filter() – Filter elements based on a condition
javascript
Copy
Edit
let nums = [10, 15, 20, 25];
let filtered = nums.filter(num => num > 15);
console.log(filtered); // Output: [20, 25]
reduce() – Reduce array to a single value
javascript
Copy
Edit
let values = [1, 2, 3, 4];
let sum = values.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 10
✅ Summary
Method	Description
push()	Add element to the end
pop()	Remove last element
unshift()	Add element to the start
shift()	Remove first element
indexOf()	Find index of an element
includes()	Check if an element exists
slice()	Extract part of an array
splice()	Add/Remove elements
concat()	Merge arrays
join()	Convert array to string
sort()	Sort array
reverse()	Reverse array
map()	Transform each element
filter()	Filter based on condition
reduce()	Reduce to a single value*/
