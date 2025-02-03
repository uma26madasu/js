/*Kelvin Weather
Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction.
Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin.
With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.

Kelvin can now publish his forecasts in Celsius and Fahrenheit.*/

const kelvin = 0;
// variable used is kelvin 
const celsius = kelvin - 273;
// variable used is celsius
let fahrenheit = celsius * (9 / 5) + 32;
// variable used is celsius 
fahrenheit = Math.floor(fahrenheit);
//rounding the decimal number by math.floor()
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);