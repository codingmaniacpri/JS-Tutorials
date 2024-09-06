// var c = 300
let a = 300 //--> Global Scope

// if (true) {
//     let a = 10
//     const b = 20

//     console.log("Inner", a) //Block Scope

//     function addnum(){ //the {} --> scope 

//     }
// }


// console.log(a)
// console.log(b)
// console.log(c) --> for scope we don't use var

// function one(){
//     const username = "priyanshi"

//     function two(){
//         const website = "youtube"
//         console.log(username)
//     }
//     console.log(website);

//     two()
// }

// one()

if(true){
    const username = "Priyanshi"
    if(username === "Priyanshi"){
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website)
}

// console.log(username);

console.log(addone(5)) // --> can implement before initialization
function addone(num){
    return num + 1;
}

// addtwo(7) --> cannot implement before initialization
const addtwo = function(num){
    return num + 2;
}
