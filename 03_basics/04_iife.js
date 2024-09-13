//Immediately Invoked Function Expressions(IIFE)
// Global scope pollution give problem sometimes so for removing pollution we used this 

// function chai(){
//     console.log(`DB Connected`)
// }
// chai()

(function chai(){
    console.log(`DB Connected`)
})();

//the below function will not work as we need to define a end to previous funtion, semicolon used
(function hellodb(){
    console.log(`DB Connected 2`)
})();

((name) => {
    console.log(`DB Connected 3 ${name} `)
})('priyanshi')
