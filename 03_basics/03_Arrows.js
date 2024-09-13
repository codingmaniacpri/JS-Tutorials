//this refers to current context
// const user = {
//     name: "jack",
//     price: 999,

//     welcomemessage: function(){
//         console.log(`${this.name}, welcome to this website`)
//         console.log(this) //will give current context of this obj
//     }
// }

// user.welcomemessage() //the current context is Jack
// user.name = "sam"
// user.welcomemessage() //now the current context is Sam

// console.log(this) //will give {} as output as current context is blank

// function code(){
//     let username = "priyanshi"
//     console.log(this) //--> // will return global values, Performance values, Interval values 
//     console.log(this.username) //-> return undefined, can use this in obj only, not in function
//  }

// code() // will return global values, Performance values, Interval values

// const code = function(){
//     let username = "priyanshi"
//     console.log()
// } --> same as above will happen

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addTwo(3, 4)) 

//OR const addTwoTwo = (num1, num2) => {
//     return num1 + num2;
// }

// OR const addTwoTwoTwo = (num1, num2) => num1 + num2;

// console.log(addTwoTwoTwo(3, 4))

// const addingTwo = (num1, num2) => {username: "Priyanshi"} //--> return undefined
const addingTwo = (num1, num2) => ({username: "Priyanshi"}) //--> return username
console.log(addingTwo(2,5)) 