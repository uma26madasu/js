/*What are Loops?
Loops are used to execute a block of code multiple times until a specified condition is met. This helps avoid repetitive code and makes programming more efficient.

Types of Loops in JavaScript
for Loop
while Loop
do...while Loop
for...in Loop
for...of Loop
Let’s go through them one by one with examples.

1. for Loop (Best for Known Number of Iterations)
A for loop repeats a block of code a specific number of times.

Syntax:
javascript
Copy
Edit
for (initialization; condition; increment/decrement) {
    // Code to execute
}
Example: Print numbers from 1 to 5
javascript
Copy
Edit
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
Explanation:

let i = 1; → Start at i = 1
i <= 5; → Run the loop as long as i is less than or equal to 5
i++ → Increase i by 1 in each iteration
Output:

Copy
Edit
1
2
3
4
5
2. while Loop (Best When Condition is Unknown Initially)
A while loop repeats as long as a condition is true.

Syntax:
javascript
Copy
Edit
while (condition) {
    // Code to execute
}
Example: Print numbers from 1 to 5
javascript
Copy
Edit
let i = 1;
while (i <= 5) {
    console.log(i);
    i++; // Increment to avoid infinite loop
}
Output:

Copy
Edit
1
2
3
4
5
3. do...while Loop (Runs at Least Once)
A do...while loop executes the block at least once before checking the condition.

Syntax:
javascript
Copy
Edit
do {
    // Code to execute
} while (condition);
Example: Print numbers from 1 to 5
javascript
Copy
Edit
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);
Output:

Copy
Edit
1
2
3
4
5
✅ Even if the condition is false initially, the loop runs at least once!

4. for...in Loop (Used for Objects)
A for...in loop is used to iterate over the properties of an object.

Example: Print Object Properties
javascript
Copy
Edit
let person = { name: "Uma", age: 30, country: "USA" };

for (let key in person) {
    console.log(key + ": " + person[key]);
}
Output:

makefile
Copy
Edit
name: Uma
age: 30
country: USA
5. for...of Loop (Used for Arrays and Iterables)
A for...of loop is used to iterate over arrays, strings, or other iterable objects.

Example: Loop Through an Array
javascript
Copy
Edit
let fruits = ["Apple", "Banana", "Cherry"];

for (let fruit of fruits) {
    console.log(fruit);
}
Output:

nginx
Copy
Edit
Apple
Banana
Cherry
Loop Control Statements
break Statement → Stops the loop completely.
continue Statement → Skips the current iteration and continues to the next one.
Example of break: Stop the loop when i = 3
javascript
Copy
Edit
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break; // Stop the loop
    }
    console.log(i);
}
Output:

Copy
Edit
1
2
Example of continue: Skip i = 3 but continue the loop
javascript
Copy
Edit
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // Skip this iteration
    }
    console.log(i);
}
Output:

Copy
Edit
1
2
4
5
Summary Table
Loop Type	Best Used For	Condition Check
for	When you know the number of iterations	Before each iteration
while	When the number of iterations is unknown	Before each iteration
do...while	When you need at least one iteration	After the first iteration
for...in	Looping through object properties	N/A
for...of	Looping through arrays/iterables	N/A
Final Practice Task
Try writing a for loop that prints only even numbers from 1 to 10.*/


for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}