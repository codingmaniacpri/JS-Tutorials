// const food = ["burger", "pizza", "french fries", "ice cream"]

// const values = food.forEach((item) => {
//     // console.log(item);
//     return item;
// })

// console.log(values); --> undefined

const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter((num) => {
//     return num > 4 
// })
// console.log(newNums); //num > 4

// const newNums = []

// myNums.forEach((num) => {
//     if(num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);


const books = [
{title: 'Book one', genre: 'Chemistry', publishingDate: 1988},
{title: 'Book two', genre: 'History', publishingDate: 2010},
{title: 'Book three', genre: 'Maths', publishingDate: 2022},
{title: 'Book four', genre: 'Geography', publishingDate: 2015},
{title: 'Book five', genre: 'History', publishingDate: 2003},
{title: 'Book six', genre: 'Chemistry', publishingDate: 2013},
];

let userbooks = books.filter((bk) => bk.genre === "History")

userbooks = books.filter((bk) => {
    return bk.publishingDate >= 2000 && bk.genre === "History"
})

console.log(userbooks);
