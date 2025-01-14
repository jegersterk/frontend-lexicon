let x = 4;
let y = "hej";
let z = true;
console.log(y === "hej" && !z);

//if utan block
if (x === 4) console.log("fyra");
else console.log("ej fyra!");

//if med block
if (x === 4) {
  console.log("fyra");
} else if (x === 3) {
  console.log("tre");
} else {
  console.log("ej fyra!");
}

//ternary operator: yttryck/condition ? sant : falskt
x === 4 ? console.log("fyra") : console.log("ej fyra");

//switch case
const color = "blue";
switch (color) {
  case "blue":
    console.log("Color is blue");
    break;
  case "yellow":
    console.log("yellow");
    break;
  default:
    console.log("not valid");
}
