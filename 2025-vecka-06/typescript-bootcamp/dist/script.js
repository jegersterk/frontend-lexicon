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
// 12
const arr12 = [1, 3, 2, 6, 5];
function sortNumbers(arr) {
    return arr.sort((a, b) => a - b);
}
console.log("uppg 12: ", sortNumbers(arr12));
// 13
const latitude = 1;
const longitude = 2;
const coordinate = [latitude, longitude];
console.log("uppg 13: ", coordinate);
// 14
function isString(arg) {
    return typeof (arg) === "string";
}
console.log("uppg 14: ", isString(1));
// 15
function joinStrings(strArr) {
    let sumOfStr = '';
    for (str of strArr) {
        sumOfStr += str;
    }
    return sumOfStr;
}
const strArr = ["ha ", "he ", "ho"];
console.log("uppg 15: ", joinStrings(strArr));
// 16
function greet(name) {
    return name.length === 0 ? "hello guest" : "hello " + name;
}
console.log("uppg 16: ", greet(""));
// 17
function createMultiplier(mult) {
    return (arg) => arg * mult;
}
const multiplier = createMultiplier(5);
console.log("uppg 17: ", multiplier(3));
// 18
function printValue(value) {
    if (value == null || value == undefined) {
        console.log("uppg 18: ", "no value");
    }
    else {
        console.log("uppg 18: ", typeof (value));
    }
}
const var18 = null;
printValue(var18);
const abook = {
    title: "a book",
    author: "dunno",
    year: 1978
};
// 20
const grade = 150;
function gradeEvaluator(grade) {
    return grade >= 50 ? "pass" : "fail";
}
console.log("uppg 20: ", gradeEvaluator(grade));
// 21
function countdown(count) {
    const interval = setInterval(() => {
        console.log("uppg 21: ", count--);
        count < 0 ? clearInterval(interval) : null;
    }, 1000);
}
// countdown(10);
// 22
const word = "blue";
function createSentence(word) {
    return `a ${word} car`;
}
console.log("uppg 22: ", createSentence(word));
// 23
function trafficLight() {
    const lights = ["red", "yellow", "green"];
    let i = 0;
    const interval = setInterval(() => {
        console.log("uppg 23: ", lights[i % 3]);
        if (i > 10) {
            clearInterval(interval);
        }
        i++;
    }, 1000);
}
// trafficLight();
// 24
function oddEvenArrCheck(arr) {
    for (const num of arr) {
        console.log("uppg 24: ", num, isEven(num) ? "even" : "odd");
    }
}
const arr24 = [1, 2, 3, 4, 2, 3, 4, 5];
oddEvenArrCheck(arr24);
//# sourceMappingURL=script.js.map