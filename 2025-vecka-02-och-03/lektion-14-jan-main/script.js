const fruit = {
    name: 'Apple',
    isNutritious: true,
    color: 'Green'
}
console.log(fruit);
console.log(fruit.color);
console.log(fruit['name']);
fruit.brand = 'Ica';
console.log(fruit);

delete fruit.brand;

console.log(fruit);

for (const prop in fruit) {
    console.log(prop);
}

const fruits = [fruit, fruit, fruit, fruit];

for (const obj of fruits) {
    console.log(obj);
}

// JSON

const myJson = {
    "fruits": [
        {
            "id": 1,
            "name": "Apple",
            "isNutritious": true,
            "color": "Green"
        },
        {
            "id": 2,
            "name": "Pear",
            "isNutritious": true,
            "color": "Green"
        },
        {
            "id": 3,
            "name": "Banana",
            "isNutritious": true,
            "color": "Yellow"
        }
    ]
}

console.log(myJson.fruits);
const stringify = JSON.stringify(myJson);
console.log(stringify);
console.log(window);



