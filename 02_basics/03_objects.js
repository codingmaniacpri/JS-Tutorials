//Singleton --> by constructor single object created that is unique and does not have multiple instance
//Object.create

const mySym = Symbol("key1")
//Object Literals
const Jsuser = {
    name: "Priyanshi",
    "full name": "Priyanshi Agarwal",
    [mySym]: "mykey1", //for symbol square brackets are necessary
    age: 22,
    location: "Jaipur",
    email: "Priyanshi.Agarwal@google.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "Tuesday"]
}

// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser["full name"]) //can't access full name by dot as it stored as a string
// console.log(typeof Jsuser.mySym) //type is string
// console.log(Jsuser[mySym])

Jsuser.email = "Priyanshi@amazon.com"
// console.log(Jsuser);

// Object.freeze(Jsuser); //After freezing no changes will be done
Jsuser.email = "Priyanshi@microsoft.com"
// console.log(Jsuser)

Jsuser.greeting = function(){
    console.log("Hello JS User");
}

Jsuser.greetingTwo = function(){
    console.log(`Hi Js User, ${this.name}`);
}

console.log(Jsuser.greeting())
console.log(Jsuser.greetingTwo())