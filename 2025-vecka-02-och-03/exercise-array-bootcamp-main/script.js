//Array innehållandes flera objekt
let persons = [
    {
        name: "Felicia",
        age: 12
    },
    {
        name: "Pelle",
        age: 20
    },
    {
        name: "Peter",
        age: 59
    },
    {
        name: "Anna",
        age: 32
    },
    {
        name: "Jocke",
        age: 18
    },
    {
        name: "Ella",
        age: 3
    }
]

/* 1 */
/* Gör en array som innehåller 5 st olika frukter av datatypen string. */
console.log('Uppgift 1');
const fruits = ["banana", "apple", "orange", "lemon", "pear"];

/* 2 */
/* Gör en array som innehåller 3 olika datatyper, ex. string, number, array. */
console.log('Uppgift 2');
const differentDatatypes = ["12", 12, [1,2]];

/* 3 */
/* let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'] */
/* console.log() hur många objekt arrayen ovan innehåller. */
console.log('Uppgift 3');
let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua']
console.log(animals.length);

/* 4 */
/* let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'] */
/* I arrayen ovan, hämta cat. */
console.log('Uppgift 4');
console.log(animals[0]);

/* 5 */
/* let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'] */
/* I arrayen ovan, hämta funky chihuahua. */
console.log('Uppgift 5');
console.log(animals[3]);

/* 6 */
/* let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'] */
/* I arrayen ovan, byt ut hamster mot tiger. */
console.log('Uppgift 6');
animals[1] = "tiger";

/* 7 */
/* let a = [1,2,3]; */
/* let b = [4,5,6]; */
/* Sätt ihop ovanstående arrayer. */
console.log('Uppgift 7');
let a = [1,2,3];
let b = [4,5,6];
let c = [...a,...b];
console.log(c);

/* 8 */
/* let a = [1,2,3,7,8,9]; */
/* let b = [4,5,6]; */
/* Merga in array b på index 3 i array a.. */
console.log('Uppgift 8');
let a8 = [1,2,3,7,8,9];
let b8 = [4,5,6];
a8.splice(2, 0, ...b8);
console.log(a8);

/* 9 */
/* let arr = ['a', 'b', 'c']; */
/* Klona ovanstående array. */
console.log('Uppgift 9');
let arr = ['a', 'b', 'c'];
let arr2 = arr;
arr2 = ['s'];
console.log(arr);

/* 10 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* Lägg till en frukt i slutet av arrayen ovan. */
console.log('Uppgift 10');
let fruits10 = ['kiwi', 'apple', 'pear'];
fruits10.push('orange');
console.log(fruits10);

/* 11 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* Lägg till en frukt i början av arrayen ovan. */
console.log('Uppgift 11');
let fruits11 = ['kiwi', 'apple', 'pear'];
fruits11.unshift('banana');
console.log(fruits11);


/* 12 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* I arrayen ovan, ta bort sista frukten i arrayen. */
console.log('Uppgift 12');
let fruits12 = ['kiwi', 'apple', 'pear'];
fruits12.pop();
console.log(fruits12);

/* 13 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* I arrayen ovan, ta bort första frukten i arrayen. */
console.log('Uppgift 13');
let fruits13 = ['kiwi', 'apple', 'pear'];
fruits13.shift();
console.log(fruits13);

/* 14 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* Sätt in en frukt i arrayen ovan på index 1. */
console.log('Uppgift 14');
let fruits14 = ['kiwi', 'apple', 'pear'];
fruits14[0] = 'banana';
console.log(fruits14);

/* 15 */
/* let fruits = ['kiwi', 'apple', 'pear']; */
/* Sätt in, tre frukter i arrayen ovan på index 2. */
console.log('Uppgift 15');
let fruits15 = ['kiwi', 'apple', 'pear'];
array15 = ['banana', 'orange', 'pineapple'];
fruits15 = [...array15,...fruits15.slice(1)]; 
console.log(fruits15.slice(0));

/* 16 */
/* let names = ['David', 'Christoffer', 'Johan', 'Maja'] */
/* I arrayen ovan, ta bort Christoffer och Johan. */
console.log('Uppgift 16');
let names = ['David', 'Christoffer', 'Johan', 'Maja'];
names.splice(1, 2);
console.log(names);

/* 17 */
/* let nums = [1,2,3,4,5,6,7,8,9]; */
/* Spegelvänd på arrayen ovan. */
console.log('Uppgift 17');
let nums = [1,2,3,4,5,6,7,8,9];
nums.reverse();
console.log(nums);

/* 18 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* Kika om strängen ovan innehåller bokstaven n. */
console.log('Uppgift 18');
let str = 'Supercalifragilisticexpialidocious';
console.log(str.includes("n"));

/* 19 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* Kika om strängen ovan innehåller bokstaven x. */
console.log('Uppgift 19');
console.log(str.includes("x"));

/* 20 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* I ovanstående sträng, hitta vilket position första förekomsten av p har. */
console.log('Uppgift 20');
console.log(str.indexOf("p"));  

/* 21 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* I strängen ovan, plocka fram de 5 första tecknena. */
console.log('Uppgift 21');


/* 22 */
/* let str = 'Supercalifragilisticexpialidocious'; */
/* I strängen ovan, plocka fram de 7 sista tecknena. */
console.log('Uppgift 22');

/* 23 */
/* let numArray = [23, 45, 5, 62, 1, 21, 3, 54]; */
/* I arrayen ovan, filtera fram alla nummer över 5. Tips: Läs dokumentationen för filter() */
console.log('Uppgift 23');

/* 24 */
/* let numArray = [23, 45, 5, 62, 1, 21, 3, 54]; */
/* I arrayen ovan, filtera fram alla nummer under 5. Tips: Läs dokumentationen för filter() */
console.log('Uppgift 24');

/* 25 */
/* Skriv ut alla namn som är 18 år eller över från arrayen längst upp i dokumentet. */
console.log('Uppgift 25');

/* 26 */
/* Skriv ut alla namn som är under 18 år från arrayen längst upp i dokumentet. */
console.log('Uppgift 26');

/* 27 */
/* let arr = ['beta', 'alfa', 'gamma']; */
/* Sortera ovanstående array alfabetisk. Tips: Läs dokumentattionen för sort() */
console.log('Uppgift 27');

/* 28 */
/* let nums = [1,5,7,9,3,4,2,6,8]; */
/* Sortera ovanstående array numeriskt. */
console.log('Uppgift 28');

/* 29 */
/* I person-arrayen längst upp i dokumentet, sortera objekten efter ålder, yngst först. */
console.log('Uppgift 29');

/* 30 */
/* I person-arrayen längst upp i dokumentet, sortera objekten efter ålder, äldst först. */
console.log('Uppgift 30');

/* 31 */
/* I person-arrayen längst upp i dokumentet, sortera objekten i bokstavsordning efter deras namn */
console.log('Uppgift 31');

/* 32 */
/* I person-arrayen längst upp i dokumentet, gör om alla namn till versaler. */
console.log('Uppgift 32');

/* 33 */
/* I person-arrayen längst upp i dokumentet, spegelvänd alla namn. */
console.log('Uppgift 33');

/* 34 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array med en forEach()-loop. console.log() varje ord. */
console.log('Uppgift 34');

/* 35 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array med en for of-loop. console.log() varje ord. */
console.log('Uppgift 35');

/* 36 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array med en for-loop. console.log() varje ord. */
console.log('Uppgift 36');

/* 37 */
/* let fruits = ['apelsin', 'päron', 'äpple', 'kiwi']; */
/* Loopa ut följande array. För varje varv i loopen ska du också skriva ut index. ex: */
/* 0 - apelsin */
/* 1 - päron */
/* 2 - äpple */
/* osv... */
console.log('Uppgift 37');

