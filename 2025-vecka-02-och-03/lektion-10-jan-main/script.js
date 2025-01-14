//var, let och const har olika scope som kan vara lite märkliga
// var testVar = "test av var,";
// let testLet = "test av let,";
// const testConst = "test av const";

// function scopeTests() {
//   //dessa skriver över innehållet satt i början av dokumentet då de är samma variabel
//   testVar = "test av var inuti,";
//   testLet = "test av let inuti,";
//   if (true) {
//     let testLet = "?"; //let här är deklarerat lokalt och används bara inuti funktionen
//     var testVar = "??"; //var här kommer deklareras globalt och skriva över den var vi skrev först i dokumentet
//     console.log(testVar, testLet, testConst);
//   }
//   console.log(testVar, testLet, testConst);
// }

// scopeTests();

//variabler har olika scope som de kan nås via. Det som deklareras mellan {} kommer du bara åt mellan dessa (om det inte är var som beter sig lite annorlunda)
// function scopeTests() {
//   let variable = 2;
//   console.log(variable);
//   if (true) {
//     let inside = 5;
//     variable = 4;
//     console.log(inside);
//     console.log(variable);
//   }
//   console.log(variable);
// }

// scopeTests();

// //funktioner som denna är hoisted - de kan deklareras efter de används
// //en funktion kan ta emot argument som parametrar
// //param1 och param2 parametrar
// function myFunction(param1, param2) {
//   console.log("hej " + param1 + " och " + param2);
// }

// //Anna och Otto är argument som skickas med
// myFunction("Anna", "Otto");

// //inte hoisted då är tilldelad som const, en funktionsdeklaration
// let myFunction2 = function () {
//   console.log("Funktion 2");
// };
// myFunction2();

// // kan omdeklareras då det är let, använd const om det inte ska gå
// myFunction2 = function () {
//   console.log("Funktion 2.5");
// };
// myFunction2();

// //arrow function
// const myFunction3 = (param1) => {
//   console.log("Funktion 3", param1);
// };

// myFunction3("Hej jag är ett argument");

//return returnerar saker från funktionen
function myFunction4(param) {
  return param * 4;
}

//number blir det som funktionen returnerar INTE funktionen
let number = myFunction4(2); //funktionsanrop
console.log(number);
number = myFunction4(5);
console.log(number);

//inbyggda funktion för window objektet (webläsaren)
// alert("hej")
// let name = window.prompt("Vad heter du?", "Namn");
// console.log(name);
//console.log(confirm("Ok?"));

// if (confirm("ok")) {
//   alert("JA");
// }

// function myFunction5() {
//   let name = window.prompt("Vad heter du?", "Namn");
//   if (name.length >= 0) {
//     return name;
//   }
//   return name;
// }

// console.log(myFunction5());

//with default value
function myFunction6(color, fuelType, wheels = 4) {
  return color + ", " + fuelType + ", " + wheels;
}

console.log(myFunction6("blue", "diesel", 2)); //default värde för wheels används inte
console.log(myFunction6("blue", "diesel")); //default värde för wheels används
