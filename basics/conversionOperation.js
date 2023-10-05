let score= "33abc"

console.log(typeof score); // Datatype will be string because the upper value(score="33abc") is stored in the string
console.log(typeof{score}); //{} will give the datatype "Object"

let valueInNumber = Number(score)

console.log(typeof valueInNumber);//Number will be the datatype

console.log(valueInNumber);//NaN


// "33" => 33
//"33abc" => NaN
// true => 1; false => 0


let isLoggedIn =190

let booleanIsLoggedIn =Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);

// true => 1; false => 0
//"" => False
// "Mayur" => True


// ************************* Operations **********

console.log(2+2);
console.log(2-2);
console.log(2%2);
console.log(2**2);
//etc etc

console.log("1"+2); //12
console.log(1+"2"); //12
console.log("1"+2+3); //123
console.log(1+2+"3"); //33

console.log(+true); //1
//console.log(true+); //error



