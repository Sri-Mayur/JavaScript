const score = 400
console.log(score);

const balance = new Number(400)
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2));

const otherNumber = 123.672467

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));


//+++++++++++++++++++++ Maths +++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));

console.log(Math.round(4.6));

console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));

console.log(Math.min(4,6,7,5,4,3));


//Mostly used

console.log(Math.random());
console.log((Math.random()*10)+1);

const min =10
const max= 20

console.log(Math.floor(Math.random()*(max-min+1))+min);

/*

In the above console.log, Math.floor has been used to remove decimals and get the least value.

Math.random is to get random values.

Since, Math.random provides values between 0 to 1 so, we have multiplied it by (max - min) to get the specified range.

then we have added min so that all the value we get will be above min value

*/


