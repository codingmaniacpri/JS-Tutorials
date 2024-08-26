//Primitive

//7 types : String, Number, Boolean, null, undefined, symbol(for making any value unique), 
//BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id == anotherId); //false

const bigNumber = 2742374274982734982749823n; //after putting n it becomes bigint, without it its a number
console.log(typeof bigNumber);

//Reference (Non primitive)

//Arrays, Objects, Functions

const heros = ["superman", "spiderman", "ironman"];
let myObj = {
    name: "priyanshi",
    age: 22
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof outsideTemp); //--> object
console.log(typeof myFunction);  //--> function {called as object function}