//Arrays
//--> object where can store collection of multiple items in single variable
//JavaScript arrays are resizable and contain mix of different datatypes

const myArray = [0, 1, 2, 3, 4, 5] 

//console.log(myArray["one"]) --> this is wrong(not associative)
//console.log(myArray[0]);
//JS Arrays are zero indexed
//JS Array copy operation create shallow copy(is a copy whose properties share same references)

const myHeros = ['Superman',"Spiderman", "Ironman", "Batman"]
const myArr2 = new Array(1, 2, 3, 4)

//Array Methods
// myArray.push(6);
// myArray.push(7)
// console.log(myArray);
// myArray.pop(7);
// myArray.unshift(9) //--> 9 will be inserted in the starting of array

// myArray.shift(); //will remove the first element of array

// console.log(myArray.includes(6)) //returns boolean value(true or false)
// console.log(myArray.indexOf(4)) //returns index of element(if not present -1)

// const newArr = myArray.join();
// console.log(myArray);
// console.log(typeof newArr); //converts array into string

//Slice, Splice
console.log("A ", myArray)

//Slice just slices the part from 1st element to 2nd elements
const myn1 = myArray.slice(1, 3)
console.log(myn1) // [1,2] --> 1  included, 3 excluded
console.log("B ", myArray)

//Splice manipulates original array and remove the spliced elements from Orig Array
const myn2 = myArray.splice(1, 3)
console.log("C ", myArray) // [0,4,5] --> maniplulaes original array and removes 3 elements
console.log(myn2); //[1,2,3] --> returns 1 to 3 elements
