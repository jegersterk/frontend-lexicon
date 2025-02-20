// 1
let nr: number = 2;
let str: string = "two";
let bool: boolean = false;
console.log("uppg 2d: ", nr, str, bool);

// 2
// a Vad betyder (type) inference? 				- att man bestämmer vilken typ värdet är
// b Vad är ett interface? 						- fungerar som objekt i typescript
// c Vilka datatyper har JavaScript?			- boolean, bigint, null, number, string, symbol, and undefined
// d Vilka nya datatyper tillför TypeScript?	- any, unknown, never, void
// e Vad är generics?							- beskriver värdetyp

// 3
function sum(x: number, y: number): number {
	return x + y;
}
console.log("uppg 3: ", sum(3, 4));

// 4
function isEven(x: number): boolean {
	if (x % 2) {
		return false;
	}
	else {
		return true;
	}
}
console.log("uppg 4: ", isEven(3));

// 5
const numbers: number[] = [1, 2, 3, 4, 4, 5, 6, 6, 7];

// 6
function filterEvenNumbers(arr: number[]): number[] {
	let newArray: number[] = [];
	for (let x of arr) {
		if (isEven(x)) {
			newArray.push(x);
		}
	}
	return newArray;
}
console.log("uppg 6: ", filterEvenNumbers(numbers));

// 7
function describeValue(value: string | number) {
	return typeof (value);
}
console.log("uppg 7: ", describeValue(1), describeValue("1"));

// 8
type Person = {
	name: string,
	age: number
};

const snubbe: Person = {
	name: "Jakob",
	age: 32
};
console.log("uppg 8: ", snubbe);

// 9
function printPersonInfo(person: Person) {
	console.log("uppg 9: ", "name: ", person.name, ", age: ", person.age);
}
printPersonInfo(snubbe);

// 10
enum weekday {
	monday,
	tuesday,
	wednesday,
	thursday,
	friday,
	saturday = "weekend",
	sunday = "weekend"
};
function isWeekend(day: weekday): boolean {
	return day === "weekend";
}
console.log("uppg 10: ", isWeekend(weekday.sunday));

// 11
const str11: string = "heheaaaaaaa";
function isLongString(str: string): boolean {
	return str.length >= 10 ? true : false;
}
console.log("uppg 11: ", isLongString(str11))

// 12
const arr12: number[] = [1, 3, 2, 6, 5];
function sortNumbers(arr: number[]): number[] {
	return arr.sort((a, b) => a - b);
}
console.log("uppg 12: ", sortNumbers(arr12));

// 13
const latitude = 1;
const longitude = 2;
const coordinate: [number, number] = [latitude, longitude];
console.log("uppg 13: ", coordinate);

// 14
function isString(arg: any): boolean {
	return typeof (arg) === "string";
}
console.log("uppg 14: ", isString(1));

// 15
function joinStrings(strArr: string[]) {
	let sumOfStr = '';
	for (str of strArr) {
		sumOfStr += str;
	}
	return sumOfStr;
}
const strArr: string[] = ["ha ", "he ", "ho"];
console.log("uppg 15: ", joinStrings(strArr));

// 16
function greet(name: string): string {
	return name.length === 0 ? "hello guest" : "hello " + name;
}
console.log("uppg 16: ", greet(""));

// 17
function createMultiplier(mult: number): (argument: number) => number {
	return (arg: number) => arg * mult;
}
const multiplier: any = createMultiplier(5);
console.log("uppg 17: ", multiplier(3));

// 18
function printValue(value: unknown): void {
	if(value == null || value == undefined){
		console.log("uppg 18: ", "no value");
	}else{
		console.log("uppg 18: ", typeof(value));
	}
}
const var18: any = null;
printValue(var18);

// 19
interface book{
	title: string,
	author: string,
	year: number
}
const abook: book = {
	title: "a book",
	author: "dunno",
	year: 1978
}

// 20
const grade: number = 150;
function gradeEvaluator(grade:number) : string{
	return grade >= 50 ? "pass" : "fail";
}
console.log("uppg 20: ", gradeEvaluator(grade));

// 21
function countdown(count:number){
	const interval: any = setInterval(() => {
		console.log("uppg 21: ", count--);
		count < 0 ? clearInterval(interval):null;
	}, 1000);
}
// countdown(10);

// 22
const word:string = "blue";
function createSentence(word:string):string{
	return `a ${word} car`;
}
console.log("uppg 22: ", createSentence(word));

// 23
function trafficLight(){
	const lights : string[] = ["red","yellow","green"];
	let i = 0;
	const interval = setInterval(() => {
		console.log("uppg 23: ", lights[i%3]);
		if(i > 10){clearInterval(interval)}
		i++;
	},1000);
}
// trafficLight();

// 24
function oddEvenArrCheck(arr:number[]){
	for(const num of arr){
		console.log("uppg 24: ",num,isEven(num)?"even":"odd");
	}
}
const arr24:number[] = [1,2,3,4,2,3,4,5];
oddEvenArrCheck(arr24);