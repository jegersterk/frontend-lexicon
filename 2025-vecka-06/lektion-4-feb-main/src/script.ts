let greeting: string = "Hello world!";
console.log(greeting);

// boolean, nummer

let boolis: boolean = true;

let numris: number = 0;

console.log(boolis, numris);

// arrayer
let myStringArr: string[] = ["måla", "virka", "plantera"];
console.log(myStringArr);
let myNumArr: number[] = [0, 1, 2, 3, 4];

let myUnion: string | boolean = "Maja";

type User = {
    name: string;
    interests: string[];
}

let myUserArr: User[] = [
    {
        name: "Maja",
        interests: myStringArr
    },
    {
        name: "Mooncake",
        interests: ["Play", "Eat"]
    }
];

interface IGoose {
    feathers: number;
    isCute: boolean;
    honk?: () => string; // valfri
};

let geese: IGoose[] = [];

let myGoose: IGoose = {
    feathers: 239072,
    isCute: false
};
geese.push(myGoose);
console.log(geese);

const button = document.querySelector('button');
if (button !== null) {
    const myButton: HTMLButtonElement = button;
}

let myVariable: any = "hejhej";