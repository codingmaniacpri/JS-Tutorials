//Date

let myDate = new Date()
// console.log(myDate.toString()); //Fri Aug 30 2024 05:00:39 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); //Fri Aug 30 2024
// console.log(myDate.toISOString()); //2024-08-30T05:00:39.062Z
// console.log(myDate.toJSON()); //2024-08-30T05:00:39.062Z
// console.log(myDate.toLocaleDateString()); //8/30/2024
// console.log(myDate.toLocaleString()); //8/30/2024, 5:00:39 AM
// console.log(myDate.toLocaleTimeString()); //5:00:39 AM
// console.log(myDate.toTimeString()); //05:00:39 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toUTCString()); //Fri, 30 Aug 2024 05:02:18 GMT
// console.log(myDate.getTimezoneOffset()); 
// console.log(typeof myDate); 

// let myCreatedDate = new Date(2023, 0, 23); //month starts from 0
// let myCreatedDate = new Date(2023, 0, 23, 5, 3); //time will come
// let myCreatedDate = new Date("2023-01-14"); YYY-MM-DD
// let myCreatedDate = new Date("01-14-2023"); MM-DD-YYYY
let myCreatedDate = new Date("01-14-2023"); 
//console.log(myCreatedDate.toLocaleString()); Mon Jan 23 2023

let myTimeStamp = Date.now();
// console.log(myTimeStamp); --> millisec
// console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000)); --> can compare milli sec

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMilliseconds())
console.log(newDate.getFullYear())

//`{newDate.getDay()} and time is`

console.log(newDate.toLocaleString('default', {
    weekday: "long"
}))