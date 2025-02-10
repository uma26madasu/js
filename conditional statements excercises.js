/*Greet if Kid
Let's begin with practicing the if statement.
Write a function greetIfKid that prints Hey! to the console 
if the person's age is less than 18 (using the >variable age).*

function greetIfKid(age) {
    if (age < 18) {
        console.log('Hey!');
    }
}
greetIfKid(17)

Write a function greetIfRetired that:

Takes the age parameter (i.e.: the person's age)

function greetIfRetired (age)
{
  if (age>=65)
  {
    console.log ('Have a nice day!')
  }
}
greetIfRetired(67);

Print Odd or Even


Now let's practice using if and else. Write a function printOddOrEven, which takes a positive integer (as a parameter n), and prints in the console:

The word even — if the number n is even.
The word odd — if the number n is odd.

function printOddOrEven(n) {
    if (n % 2 === 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}

printOddOrEven(4); 
printOddOrEven(7); 

function checkWordLength(word) {
    if (word.length < 5) {
        console.log(`${word} is a short word`);
    } else {
        console.log(`${word} is a long word`);
    }
}
checkWordLength('dog');
checkWordLength('Elephant');

In Europe, legal drinking age is 18. Create a function canBuyBeer that takes an integer age as a parameter, and returns either:

'You can not buy beer', if age is less than 18.
'You can buy beer', if age is 18 or higher.

function canBuyBeer(age) {
    if (age < 18) {
        return "You can not buy beer";
    } else {
        return "You can buy beer";
    }
}
console.log(canBuyBeer(21));
console.log(canBuyBeer(17));


Waiters love tips! They shared with us their system for evaluating the amounts received 💵. Let's help them automate this process by implementing the function getTipsRating, which takes the tip amount and returns a string rating according to the given amount:

excellent, if amount is more than 50;
great, if amount is more than 20;
good, if amount is more than 10;
poor, if amount is more than 0;
otherwise, return terrible.

function getTipsRating(amount) {
    if (amount > 50) {
        return "excellent";
    } else if (amount > 20) {
        return "great";
    } else if (amount > 10) {
        return "good";
    } else if (amount > 0) {
        return "poor";
    } else {
        return "terrible";
    }
}
console.log(getTipsRating(60));
console.log(getTipsRating(25)); 
console.log(getTipsRating(15)); 
console.log(getTipsRating(5)); 
console.log(getTipsRating(10)); 
Taxes are due soon! Let's write a calculateTaxes function that calculates how much tax we need to pay. It should:

Accept a positive number income (our income).
Return the appropriate tax amount:
2%, if the income is up to 1000 inclusive.
3%, if the income exceeds 1000, but is not higher than 10000.
5%, if the income exceeds 10000.*/

function calculateTaxes(income) {
    if (income <= 1000) {
        return income * 0.02;
    } else if (income <= 10000) {
        return income * 0.03;
    } else {
        return income * 0.05;
    }
}

// Example usage:
console.log(calculateTaxes(500));    // Output: 10 (2% of 500)
console.log(calculateTaxes(5000));   // Output: 150 (3% of 5000)
console.log(calculateTaxes(15000));  // Output: 750 (5% of 15000)
