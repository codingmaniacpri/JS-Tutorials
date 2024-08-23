const accountId = 4455;
let accountEmail = "priyagarg@gmail.com"; //used rather than var for scope
var accountPassword = "150702";
accountCity = "Jaipur";
let accountState; //value is undefined

//accountId = 2; --> not allowed
accountEmail = "pp@gmail.com";
accountPassword = "2231";
accountCity = "Agra";


/*
Prefer not to use var
because of block scope and functional scope
*/

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

console.table([accountId, accountEmail,accountPassword,accountCity,accountState]); //It will show in table rather than writing console again and again