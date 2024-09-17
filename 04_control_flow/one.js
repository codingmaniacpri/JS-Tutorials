//Control flow --> whole code shouldn't run, it should run on the basis of condition
//Suppose if you are logged in then different code should run, logout then different code should run

//if , true --> executes, false --> does not executes

// const isUserLoggedIn = true;
// const temperature = 41
// if(temperature === 40){
// console.log("less than 50")
// }else{
//     console.log("temperature is greater than 50")
// }

// console.log("execute")

//Comparison operator --> >,<, <=, >=, ==, !=, ===(strict equal, checks datatype also), 
//!==(strict not equal, checks datatype also)

// const score = 200
// if(score > 100){
//     const power1 = "fly"
//     var power2 = "fly"
//     console.log(`the power is ${power1}`)
// }
// console.log(`the power is ${power1}`) [const]--> this will be invalid as power is defined in a scope
// console.log(`the power is ${power2}`) --> gives output as var scope is global(not appropriate)

//IMPLICIT SCOPE
// const balance = 1000
// if(balance > 500) console.log("greater than 500"),
// console.log("and test"); //NOT A GOOD PRACTICE 

// if(balance < 500){
//     console.log("less than 500")
// }else if(balance < 750){
//     console.log("less than 750")
// }else if(balance < 900){
//     console.log("less than 900")
// }else{
//     console.log("less than 1200")
// }

//LOGICAL OPERATORS
const userLoggedIn = true
const debitCard = true
const userLoggedFromGoogle = true
const userLoggedFromEmail = true

if(userLoggedIn && debitCard && 2===3){
    console.log("Allow user to buy")
}

if(userLoggedIn || userLoggedFromEmail || userLoggedFromGoogle){
    console.log("User is logged in")
}