const nums = [1,2,3];

// const total = nums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} , currval: ${currval}`);
//     return acc + currval
// }, 0)

const total = nums.reduce((acc, currval) => acc + currval, 0)

console.log(total);


const shoppingCart = [
    {
        itemName: "Java Course",
        price: 4999
    },
    {
        itemName: ".NET Course",
        price: 3999
    },
    {
        itemName: "Full Stack Course",
        price: 6999
    },
    {
        itemName: "Data Science Course",
        price: 8999
    }
]

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(totalPrice);
