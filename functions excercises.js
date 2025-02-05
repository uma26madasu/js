/*Calculate Area Function


In this task:

Create the calculateArea function using the function keyword to calculate the area of a rectangle.
Write the length and width parameters inside parentheses.
Use the return keyword in curly brackets {} to return the rectangle's area (length * width).
Call the function with arguments 8 and 9.
Call the function again, but with different arguments — 3 and 5.
function calculateArea(length,width)
{ let area = length*width;
return area;}
console.log(calculateArea(8,9));
console.log(calculateArea(3,5));*/

/*  Create a function greet, which:
Takes the name parameter.
Returns a greeting string in the form of Hi, ${name}! (use the keyword return).
Call the function twice:
With the name Mike.
With the name John.

function greet(name) {
    return `Hi, ${name}!`;
}
console.log(greet("Mike"));
console.log(greet("John"));

Get Box Volume
Create a function getBoxVolume that:
(height defaults to 1).
Call the function twice:
With all dimensions — 3, 4, and 5.
With only two arguments — 5 and 10

function getBoxVolume(length, width, height = 1) {
      return length * width * height;
    }
    console.log(getBoxVolume(3, 4, 5));
    console.log(getBoxVolume(5, 10));

    function getMoneyRemaining(bankAccount, banknoteDenomination = 100) {
        let withdrawnAmount = Math.floor(bankAccount / banknoteDenomination) * banknoteDenomination;
        return bankAccount - withdrawnAmount;
    }
    console.log(getMoneyRemaining(1473, 20)); 
    console.log(getMoneyRemaining(1250, 50));  
    console.log(getMoneyRemaining(534));       
    
    Create a getInitials function, which accepts two parameters:
    Alice Green
    Bob Smith */

    function getInitials(name, lastName) 
    {return `${name[0].toUpperCase()}${lastName[0].toUpperCase()}`;}
    console.log(getInitials('Alice', 'Green')); 
    console.log(getInitials('Bob', 'Smith'));    

    