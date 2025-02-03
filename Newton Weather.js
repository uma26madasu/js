//Convert celsius to the Newton scale using the equation below

const kelvin = 0;
// variable used is kelvin 
const celsius = kelvin - 273;
// variable used is celsius
//let fahrenheit = celsius * (9 / 5) + 32;
// variable used is celsius 
//fahrenheit = Math.floor(fahrenheit);
//rounding the decimal number by math.floor()
let Newton = celsius * (33 / 100);
Newton = Math.floor(Newton);
console.log(`The temperature is ${Newton} degrees Newton.`);