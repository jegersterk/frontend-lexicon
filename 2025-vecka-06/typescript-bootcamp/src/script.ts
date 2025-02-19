// 1
let nr: number = 2;
let str: string = "two";
let bool: boolean = false;
console.log("uppg 2d: ",nr,str,bool);

// 2
// a Vad betyder (type) inference? 				- att man bestämmer vilken typ värdet är
// b Vad är ett interface? 						- fungerar som objekt i typescript
// c Vilka datatyper har JavaScript?			- boolean, bigint, null, number, string, symbol, and undefined
// d Vilka nya datatyper tillför TypeScript?	- any, unknown, never, void
// e Vad är generics?							- beskriver värdetyp

// 3
function sum (x:number, y:number) :number{
	return x+y;
}
console.log("uppg 3: ",sum(3,4));

// 4
function isEven(x:number) :boolean{
	if(x%2){
		return false;
	}
	else{
		return true;
	}
}
console.log("uppg 4: ",isEven(3));

// 5
const numbers : number[] = [1,2,3,4,4,5,6,6,7];

// 6
function filterEvenNumbers(arr:number[]) :number[]{
	let newArray: number[] = [];
	for(let x of arr){
		if(isEven(x)){
			newArray.push(x);
		}
	}
	return newArray;
}
console.log("uppg 6: ", filterEvenNumbers(numbers));

// 7
function describeValue(value:string | number){
	return typeof(value);
}
console.log("uppg 7: ", describeValue(1),describeValue("1"));

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
function printPersonInfo(person:Person){
	console.log("uppg 9: ", "name: ",person.name,", age: ",person.age);
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
function isWeekend(day: weekday) :boolean{
	return day === "weekend";
}
console.log("uppg 10: ", isWeekend(weekday.sunday));

// 11
const str11: string = "heheaaaaaaa";
function isLongString(str: string) :boolean{
	return str.length >= 10? true : false;
}
console.log("uppg 11: ", isLongString(str11))