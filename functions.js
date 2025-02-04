/*Functions
A function is a block of code that performs a specific task. Functions are the fundamental "building blocks" of a program, and they allow you to reuse the same code multiple times with different data, avoiding duplication.

Function Declaration
In JavaScript, there are several ways to create (synonyms: "declare", "define") a function. For instance, we can do so with a function keyword, similar to how let lets us declare variables. Here's an exemplary function that calculates the area of a rectangle and prints it to the console:

function calculateArea(length, width) {
  let area = length * width;

  console.log(area);
}

Let's break the code apart:

function is the keyword that declares the function
calculateArea is the name of the function, followed by parentheses ()
length and width are parameters of the function; they are variables that will receive values when the function is used
All commands inside curly braces {} are called the function body. Functions can have one parameter, multiple parameters, or no parameters at all.

Function Call
To execute the commands inside a function, we need to call the function itself. We do so by writing the function's name and succeeding it with arguments in parentheses, which are specific values for the function's parameters. Let's call the calculateArea function with arguments 5 and 7:

function calculateArea(length, width) {
  let area = length * width;
  
  console.log(area);
}

calculateArea(5, 7); // It will print 35 in the console

Here, 5 will be assigned to the length parameter, and 7 — to the width parameter. But sometimes, parameters might already have a predefined or default value. To demonstrate, let's calcualte the area of a fabric roll with a standard width of 1.5 meters:

function calculateArea(length, width = 1.5) {
  let area = length * width;
  
  console.log(area);
}

calculateArea(5); // the `width` value will be 1.5, so the result is 7.5

Default values are similar to the default settings on a phone set by the manufacturer. They are predefined, but you can always change them by passing new values as arguments when calling the function:

function calculateArea(length,  width = 1.5) {
  let area = length * width;
  
  console.log(area);
}

calculateArea(5); // The `width` is 1.5 because we didn't pass another value, so the result is 7.5
calculateArea(5, 7); // We provided new values for `width`, so the result is 35

function calculateArea(length, width = 1.5) 
{let area = length * width;
console.log(area);}
  calculateArea(5);
  calculateArea(9,8); 
  Returning a Value From a Function
Most often, we don't want to just print the results of calculations to the console, but use them in the program for further actions. 
Such a function should return a value. In the function body, we use the return keyword, followed by an expression or value that we want to return:

function calculateArea(length, width) {
  let area = length * width;
  return area;
}
let totalArea = 10 * calculateArea(5, 7);*/

  function calculateArea(length, width) {
    let area = length * width;
    return area;
  }
  let totalArea = 10 * calculateArea(6, 7);
  console.log(totalArea);

  // good name
  //let personName = 'UMA';
 // function sayHello(personName) { // explains the purpose of the function
  //  console.log(`Hello, ${personName}!`);
 // }