const score = 400;
// console.log(score); //--> 400

const balance = new Number(100);
// console.log(balance); //-->[Number: 100]

// console.log(balance.toString().length); //--> 3
// console.log(balance.toFixed(1)); //-->no. of precision value(2) -->
// 100.00 {can be used in ecommerce website for precision}

const otherNumber = 1123.8966
// console.log(otherNumber.toPrecision(3)); //23.9(precision-->3) => 23.9, 123.8966(3) => 124, 1123.8966(3) => 1.12e+3

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')) //--> 1,000,000 according to US standards
//'en-IN' --> will show according to indian standards, default is US standard

//*************************MATHS***********************//
// console.log(Math); //--> Object [Math] {}
// console.log(Math.abs(-3)); //converts negative to positive value but not vice versa
// console.log(Math.round(4.6)); //rounds off the number --> 5
// console.log(Math.ceil(4.2)) //takes ceil val 4.2 --> 5
// console.log(Math.floor(4.5)) //takes floor val 4.5 --> 4
// console.log(Math.min(3,4,22));
// console.log(Math.max(3,4,22));
// console.log(Math.random()); //generates random value
// console.log((Math.random()*10)); //shift one digit
// console.log((Math.random()*10) + 1); //to avoid getting 0 value
// console.log(Math.floor(Math.random()*10) + 1); //gives single value

const min = 10;
const max = 20;

//Taking random value and multiplying by 10 the adding 1 and taking floor value 
//and adding 10 so the  number comes will be greater than 10
console.log(Math.floor(Math.random() * (max - min + 1)) + min) //--> generates random no. greater than 10


