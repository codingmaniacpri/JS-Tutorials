// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 >= 1);
// console.log(2 != 1);

// console.log("2" > 1); //true
// console.log("02" > 1) //true     same datatype should be compared

//****************Avoid these conversions ************
// console.log(null > 0); //false
// console.log(null == 0); //false
// console.log(null >= 0); //true

// console.log(undefined == 0); //false
// console.log(undefined > 0);  //false
// console.log(undefined >= 0); //false 
//****************Avoid these conversions ************

//Equality operators(==, ===) work differently from greator than equals and other operators

console.log("2" == 2);
//if we check with == it will return true as it will convert, 
//but if check with === then will return false as it will check datatype