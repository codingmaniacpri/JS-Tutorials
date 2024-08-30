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

// console.log(id == anotherId); //false

const bigNumber = 2742374274982734982749823n; //after putting n it becomes bigint, without it its a number
// console.log(typeof bigNumber);

//Reference (Non primitive)

//Arrays, Objects, Functions

// const heros = ["superman", "spiderman", "ironman"];
// let myObj = {
//     name: "priyanshi",
//     age: 22
// }

// const myFunction = function(){
//     console.log("Hello World");
// }

// console.log(typeof outsideTemp); //--> object
// console.log(typeof myFunction);  //--> function {called as object function}

//*************************************

//Stack(Primitive){get copy of variable when stack memory is used},
// Heap(Non-primitive) {get reference of object of original value so changes will done to OG also when heap memory used}

//*****************Example of stack********************
let myYoutubeName = "peppypriee";

let anotherName = myYoutubeName;
anotherName = "priyanshiagarwal";

// console.log(anotherName);
// console.log(myYoutubeName);
//************copy of myYoutubeName will be assigned to anotherName************

//****************Example of Heap *****************/
let userOne = {
    email: "user@gmail.com",
    upi: "user1@paytm"
}

let userTwo = userOne; //will get reference of original value
userTwo.email = "priyanshi@yahoo.com";

console.log(userOne.email); //--> return priyanshi@yahoo.com
console.log(userTwo.email); //--> return priyanshi@yahoo.com