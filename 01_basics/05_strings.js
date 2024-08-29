const name = "priya-nshi ";
const repoCount = 50

// console.log(name + repoCount + " Value"); --> outdated syntax

// console.log(`Hey my name is ${name} and repo count is ${repoCount}`); //more suitable syntax

const gameName = new String("priya-ns-hi");

// console.log(gameName[0]); //return the first element of string
// console.log(gameName.__proto__); //returns {} --> object

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3)); // gives index
// console.log(gameName.indexOf('y'));

const newString = gameName.substring(0,4); // does not take negative values
// console.log(newString);

const anotherString = gameName.slice(-8,4); // take negative values
// console.log(anotherString);

const newStringOne = "  priyanshi  "; //strings passed during form
console.log(newStringOne);
console.log(newStringOne.trim()); //removes spaces before and after string

const url = "https://google.com";
console.log(url.replace('google','facebook'));
console.log(url.includes('google'))

console.log(gameName.split('-', 2))
