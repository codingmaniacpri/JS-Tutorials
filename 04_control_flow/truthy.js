// const userEmail = "pagarwal@google.com" //truthy value
// const userEmail = "" //falsy value

// const userEmail = [1,2] //empty array truthy value

// if(userEmail){
//     console.log("Got user email")
// }else{
//     console.log("Don't have user email")
// }

//falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

//IF ARRAY IS EMPTY THEN CHECK
// if(userEmail.length === 0) {
//     console.log("Array is empty")
// }

//CHECKING EMPTY OBJECT
const emptyObject = {}
if(Object.keys(emptyObject).length === 0){
    console.log("Object is empty")
}

//IMPORTANT 
// false == 0 --> true
// false == ''--> true
// 0 == ''--> true

//NULLISH COALESCING OPERATOR(??): null undefined --> used for error handling
let val1;
// val1 = 5 ?? 10 --> gives 5
// val1 = null ?? 10 --> gives value 10
// val1 = undefined ?? 10 --> gives 10

// val1 = null ?? 10 ?? 20 --> gives 10(takes first value)

// console.log(val1)

//TERNARY OPERATORS
//condition ? true :  false
const iceTeaPrice = 100
iceTeaPrice <= 80? console.log("less than 80"): console.log("more than 80")
