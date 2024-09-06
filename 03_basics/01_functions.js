function sayMyName(){
    console.log("P")
    console.log("R")
    console.log("I")
    console.log("Y")
    console.log("A")
}

//sayMyName --> This is just the reference of the function
// sayMyName()

// function addTwoNumber(number1, number2){ //--> Parameters
//     console.log(number1 + number2);
//     return number1 + number2;
// }

function addTwoNumber(number1, number2){ //--> Parameters
    // let result = number1 + number2;
    // return result;
    //console.log("Priya") After return nothing will be printed --> shows unreachable code
    return number1 + number2;
}

const result = addTwoNumber(3, 5) //--> Arguments

// console.log("Result:", result)

function loginUserMessage(username = "sam"){ //--> default value
    if(!username){         //or username === undefined
        console.log("Please Enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("priyanshi"))
// console.log(loginUserMessage()) //undefined will come if nothing is there

//Shopping Cart situation, where we don't know how many items will be added by customer
//Situation where we don't know how many arguments will come (REST Operator)

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 500, 300, 2000)) //val1 =200, val2 = 500 and num1 = 300 and 2000
const user = {
    name: "priyanshi",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`)
}

//Passing Objects
// handleObject(user);
handleObject({
    name: "sam",
    price: 399
})

//Passing Arrays
const myNewArray = [300, 400, 200, 100]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([100, 200, 300, 400]))