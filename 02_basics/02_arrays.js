const marverlHeros = ["thor", "Ironman", "Spiderman"];
const dc = ["superman", "flash", "batman"]

//marverlHeros.push(dc);

// console.log(marverlHeros);
// console.log(marverlHeros[3][1]); --> to access first element of dc array

// const allHeros = marverlHeros.concat(dc);
// console.log(allHeros);

// const all_new_heros = [...marverlHeros, ...allHeros] --> spreads the elements of an array
// console.log(all_new_heros)

const another_Array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// const real_Another_array = another_Array.flat(Infinity) --> Infinity is depth, we can give any number as a depth
//console.log(real_Another_array); //flat is used for Simplifying deeply nested arrays for easier manipulation and access

console.log(Array.isArray("Priyanshi")) //check if it is an array or not
console.log(Array.from("Priyanshi")) //converts in an array

//Interesting case: have to specify either key or value, which is suitable
console.log(Array.from({name: "Priyanshi"})) //returns empty array

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1, score2, score3))