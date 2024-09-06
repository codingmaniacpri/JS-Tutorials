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

console.log(loginUserMessage("priyanshi"))
console.log(loginUserMessage()) //undefined will come if nothing is there