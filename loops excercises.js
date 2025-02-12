/*Write a for loop that prints the integers from 2 to 7 inclusive to the console.
for (let i = 2; i <= 7; i++) {
    console.log(i);
  }    
Write a for loop that prints odd numbers from 3 to 11 inclusive to the console 

for (let i = 3; i <= 11; i++) 
    {
      if (i % 2 ===1) {console.log(i);}
    }

   Write a for loop that outputs numbers from 5 to 1 inclusive to the console. 
   
   for (let i = 8; i >= 1; i--)
    {console.log(i);}
   
   Write a function sumFromTo, which:

Takes two integers, min and max.
Returns the sum of all integers from min to max inclusive.

function sumFromTo(min, max) {
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i; // Add each number to sum
  }
  return sum;
}
console.log(sumFromTo(2, 5));

Write a function factorial that takes a natural number N and returns its factorial.*/

function factorial(N) {
  let result = 1; // Start with 1 because multiplying by 0 is not needed
  for (let i = 1; i <= N; i++) {
    result *= i; // Multiply result by each number from 1 to N
  }
  return result;
}
console.log(factorial(5));