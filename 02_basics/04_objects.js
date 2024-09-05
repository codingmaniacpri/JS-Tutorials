//const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = "123ab";
tinderUser.name = "Sam";
tinderUser.isLoggedIn = false;  

// console.log(tinderUser);

const regularUser = {
    email: "some@google.com",
    fullname: {
        userfullname: {
            firstname: "priya",
            lastname: "agarwal"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = { obj1, obj2 }
// 
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "kk@gmail.com"
    }
]

users[1].email;
//console.log(tinderUser)

//console.log(Object.keys(tinderUser)); //keys will be in an array, now can use loop on them and use anywhere
//console.log(Object.values(tinderUser))

//console.log(Object.entries(tinderUser)) //key and value will be an array and all of these in array

//console.log(tinderUser.hasOwnProperty('isLogged')); //checks if property exists or not in the object

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor (for making code more clean, we will use another method rather than this)

//Destructuring values of object --> don't have t repeat above sentence again and again
const {courseInstructor: instructor} = course

//console.log(courseInstructor)
console.log(instructor)

/*************Destructuring values of Objects ****************************** */
/* const navbar = ({company}) => {

}

 navbar(company = "Hitesh") */ 

 /*           PROPER JSON FORMAT
  {
    "name": "Hitesh",
    "courseName": "JS in Hindi",
    "price": "free"
 }*/
[
    {},
    {},
    {}
]