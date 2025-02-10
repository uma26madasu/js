/*Conditional Statements

In this lesson, we're going to explore conditional statements: if, else, and else if. They allow us to execute certain commands only when specific conditions are met.

The if Statement
The if statement executes a block of code only if a condition is true, like so:

let age = 25;

if (age >= 18) {
  console.log('Hello!');
}

After the if keyword, we put a space and parentheses (), in which we write the condition. Next, we use curly braces {} with one or more commands (code block), executed only if the condition is true. In our example, the condition age >= 18 is true because age = 25, so the command inside the block is executed and the console displays:

Hello!

When using the if statement within a function, we don't have to declare the variable age. It's a parameter that will receive a new value with each function call, for example:

function greetIfAdult(age) { 
  if (age >= 18){
    console.log('Hello!');
  }
}

greetIfAdult(15); // nothing will appear in the console
greetIfAdult(25); // the console will display Hello!

Checking Multiple Conditions
To check multiple conditions, we can use if within another if:

if (age >= 18) {
  if (isPresent == true) {
    console.log('Hello!');
  }
}

However, it's hard to track such a nested structure, for instance, where the brackets open and close. We're better off using logical operators && and || to combine conditions. Above example can be rewritten as follows:

if (age >= 18 && isPresent) {
  console.log('Hello!');
}

A greeting will appear only if both conditions are true. The || operator is used where it's sufficient for at least one of two conditions to be met:

if (age >= 18 || isPresent) {
  console.log('Hello!');
}

The else Statement
The else statement can be added after the if code block to specify what actions should occur if the condition isn't met (i.e., it's false). For example:

let age = 25;

if (age >= 18) {
  console.log('Hello!');
} else {
  console.log('Hi!');
}

Here's an example of using if and else statements in a function:

function greet(age) {
  if (age >= 18) {
    console.log('Hello!');
  } else if (age > 7) {
    console.log('Hi!');
  } else if (age > 3) {
    console.log('Hi, kid!');
  } else {
    console.log('Hi, toddler!');
  }
}

greet(25); // the condition is true, so `Hello!` will appear in the console
greet(15); // the condition is NOT true, so `else` will trigger and `Hi!` will The else Statement
The else statement can be added after the if code block to specify what actions should occur if the condition isn't met (i.e., it's false). For example:

let age = 25;

if (age >= 18) {
  console.log('Hello!');
} else {
  console.log('Hi!');
}

Here's an example of using if and else statements in a function:

function greet(age) {
  if (age >= 18) {
    console.log('Hello!');
  } else if (age > 7) {
    console.log('Hi!');
  } else if (age > 3) {
    console.log('Hi, kid!');
  } else {
    console.log('Hi, toddler!');
  }
}

greet(25); // the condition is true, so `Hello!` will appear in the console
greet(15); // the condition is NOT true, so `else` will trigger and `Hi!` will appear in the console
Write a function checkWordLength, which takes a string word and prints one of the following statements to the console:

word followed by " is a short word", if word has less than 5 characters.
word followed by " is a long word", if word has 5 or more characters.
The else if Statement (Checking Multiple Conditions)
When we have more than two options to choose from, we can use the else if statement to check additional conditions. Let's consider an example:

if (age >= 18) {
  console.log('Hello!');
} else if (age > 7) {
  console.log('Hi!');
} else if (age > 3) {
  console.log('Hi, kid!');
} else {
  console.log('Hi, toddler!');
}

Note that it's sufficient to add else at the end, which will execute if none of the above conditions are met. Here's an example of using else if statements in a function:

function greet(age) {
  if (age >= 18) {
    console.log('Hello!');
  } else if (age > 7) {
    console.log('Hi!');
  } else if (age > 3) {
    console.log('Hi, kid!');
  } else {
    console.log('Hi, toddler!');
  }
}


greet(25); // the first condition is true, so `Hello!` appears in the console
greet(15); // the second condition is true (the first is false), so `Hi!` appears
greet(6);  // the third condition executes (first and second are false), so `Hi, kid!` appears
greet(2);  // all previous conditions are false, so the `else` block executes, resulting in `Hi, toddler!`
The return Keyword Inside if
So far, we've looked at examples where conditional statements in functions print messages to the console depending on conditions. However, it's more common for a function to return a value with the return keyword; a value to be used later in the program. Like here:

function getGreeting(age) {
  if (age >= 18) {
    return 'Hello!';
  } else if (age > 7) {
    return 'Hi!';
  } else if (age > 3) {
    return 'Hi, kid!';
  } else {
    return 'Hi, toddler!';
  }
}

let greeting = getGreeting(6);

console.log(greeting); // Hi, kid! will appear in the console

We can simplify this code with separate if statements for each option, instead of else if, because the function ends immediately after executing the line with the return keyword. Each if block executes only if all previous conditions were false:

function getGreeting(age) {
  if (age >= 18) {
    return 'Hello!';
  }

  if (age > 7) {
    return 'Hi!';
  }

  if (age > 3) {
    return 'Hi, kid!';
  }

  return 'Hi, toddler!';
}

let greeting = getGreeting(6);

console.log(greeting); // Hi, kid! will appear in the console

Let's examine how above code works. We've created the getGreeting function, which takes one argument, age, and uses several if statements. After calling getGreeting with the argument 6, the following actions occur:

In the first if, we check whether the age is greater than or equal to 18. If this condition is true, the function returns the string Hello! and terminates.
If the age is less than 18, we move to the next if, where we check whether the age is greater than 7. If the condition is true, we return Hi!.
If this condition also fails, we move to the third if, where we check whether the age is greater than 3. If the condition is true, we return Hi, kid!.
If none of these conditions are met, the last line executes, where the function returns Hi, toddler!.*/