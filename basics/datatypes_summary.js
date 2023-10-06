//The way data is stored and accessed Datatypes are of two types:
//Primitive and Non-Primitive

/* 7 types: 
   String
   Number
   Boolean
   NULL
   Undefined
   Symbol
   BigInt         
*/

const id= Symbol("123");
const newId= Symbol("123")

console.log(id==newId);

//Javascript is dynamic typed language

//Reference type or Non-Primitive
/* Array
   Objects
   Functions
*/

 //___________________________________________________________

 //Memory Allocation

 //Primitive datatypes get memory from Stack
 //Non-Primitive get their memory sapce from heap


let name="Mayur"
let name2= name

name2="Mayur2"

console.log(name);
console.log(name2);


let list={
    email:"abcd.xyz",
    nurture:'Non',

}

let list2 = list

list2.email = "xyz.eemail"

console.log(list.email);
console.log(list2.email);