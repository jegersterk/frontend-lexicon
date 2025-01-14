// Datatyper, variabler, aritmetiska och tilldelningsoperatorer.
 
// strängar
let myString = "JS är skoj";
const constantString = "JS är alltid skoj";
 
// nummer
let myNum = 34;
 
// boolean
let isFun = true;
isFun = false;
isFun = myNum;
console.log("isFun: " + isFun); // "isFun: 34"
console.log(isFun + isFun);
 
// objekt
let bulbasaur = {
    id: 1,
    name: "Bulbasaur",
    isCute: true,
    type: ["grass"]
}
let ivysaur = {
    id: 2,
    name: "Ivysaur",
    isCute: true,
    type: ["grass"]
}
 
// listor
let myList = ["apple", "pear", "melon", "kiwi"];
console.log(myList);
 
let myPokemons = [bulbasaur, ivysaur];
console.log(myPokemons);
 
 
// aritmetiska och tilldelningsoperatorer
let x = 1 + 2;
console.log(x);
 
let y = 2 - 1;
console.log(y);
 
let z = 9 % 4;
console.log(z);
 
// +=
// x = x + y;
// x += y;
console.log("x += 1");
console.log(x += 1);
console.log(x -= 1);
console.log(x *= 2);
console.log(x /= 2);
console.log(x %= 2);
// console.log(x = x + 1);
 
 
//binary operators
//inget ni behöver kunna!
const a = 5; // 00000000000000000000000000000101
const b = 3; // 00000000000000000000000000000011
 
console.log("bitwise and");
console.log(a & b); // 00000000000000000000000000000001
console.log("bitwise or");
console.log(a | b); // 00000000000000000000000000000111
 
console.log(3*3);
 
// listor, forts.
// jag vill lägga till en till frukt till min lista
myList.push("lemon");
console.log(myList);