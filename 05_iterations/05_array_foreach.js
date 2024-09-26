const coding = ["c++", "java", "ruby","swift"]

// coding.forEach(function(val){
//     console.log(val);
    
// })

// coding.forEach((item) => {
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
    
// })

const myCoding = [
    {
        languageName: "JavaScript",
        fileName: "Js"
    },
    {
        languageName: "C++",
        fileName: "cpp"
    },
    {
        languageName: "Java",
        fileName: "java"
    },
    {
        languageName: "Ruby",
        fileName: "rb"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName);
    
})