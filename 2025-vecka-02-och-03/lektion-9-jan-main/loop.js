//for loop
//let används då värdet ändras varje gång
for (let i = 0; i <= 4; i++) {
  console.log(i);
}

//while loop
let j = 0;
while (j <= 4) {
  console.log("pre:" + j);
  j++;
  console.log("post:" + j);

  // if(j===2) {
  //   break;
  // }
}

//loop
const nrs = [1, 2, 4, 8]; //array

//const används då värdet inte ändras
for (const i in nrs) {
  console.log(i);
}
for (const nr of nrs) {
  console.log(nr);
}

//object key - value
const item = { color: "green", opacity: 0.7, visible: true };
for (const [key, value] of Object.entries(item)) {
  console.log(key + ":" + value);
}
