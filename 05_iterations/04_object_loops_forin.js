const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: 'Ruby',
    swift: "Swift"
}

for (const key in myObject) {
    // console.log(`${key} is shortcut for ${myObject[key]}`);
}

const programming = ["js","cpp","rb","java"]

for(const key in programming){
    // console.log(key); //--> returns index of array
    // console.log(programming[key]); //--> returns index of array
}

// const map = new Map();
// map.set('IN', "India")
// map.set('USA', "United States of America")

// for(const key in map){
//     console.log(key);
// } --> Nothing will be printed as output