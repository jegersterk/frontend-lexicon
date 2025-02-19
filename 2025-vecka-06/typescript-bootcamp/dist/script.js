"use strict";
// 1
let nr = 2;
let str = "two";
let bool = false;
console.log("uppg 2d: ", nr, str, bool);
// 2
// a Vad betyder (type) inference? 				- att man bestämmer vilken typ värdet är
// b Vad är ett interface? 						- fungerar som objekt i typescript
// c Vilka datatyper har JavaScript?			- boolean, bigint, null, number, string, symbol, and undefined
// d Vilka nya datatyper tillför TypeScript?	- any, unknown, never, void
// e Vad är generics?							- beskriver värdetyp
// 3
function sum(x, y) {
    return x + y;
}
console.log("uppg 3: ", sum(3, 4));
// 4
function isEven(x) {
    if (x % 2) {
        return false;
    }
    else {
        return true;
    }
}
console.log("uppg 4: ", isEven(3));
// 5
const numbers = [1, 2, 3, 4, 4, 5, 6, 6, 7];
// 6
function filterEvenNumbers(arr) {
    let newArray = [];
    for (let x of arr) {
        if (isEven(x)) {
            newArray.push(x);
        }
    }
    return newArray;
}
console.log("uppg 6: ", filterEvenNumbers(numbers));
// 7
function describeValue(value) {
    return typeof (value);
}
console.log("uppg 7: ", describeValue(1), describeValue("1"));
const snubbe = {
    name: "Jakob",
    age: 32
};
console.log("uppg 8: ", snubbe);
// 9
function printPersonInfo(person) {
    console.log("uppg 9: ", "name: ", person.name, ", age: ", person.age);
}
printPersonInfo(snubbe);
// 10
var weekday;
(function (weekday) {
    weekday[weekday["monday"] = 0] = "monday";
    weekday[weekday["tuesday"] = 1] = "tuesday";
    weekday[weekday["wednesday"] = 2] = "wednesday";
    weekday[weekday["thursday"] = 3] = "thursday";
    weekday[weekday["friday"] = 4] = "friday";
    weekday["saturday"] = "weekend";
    weekday["sunday"] = "weekend";
})(weekday || (weekday = {}));
;
function isWeekend(day) {
    return day === "weekend";
}
console.log("uppg 10: ", isWeekend(weekday.sunday));
// 11
const str11 = "heheaaaaaaa";
function isLongString(str) {
    return str.length >= 10 ? true : false;
}
console.log("uppg 11: ", isLongString(str11));
//# sourceMappingURL=script.js.map