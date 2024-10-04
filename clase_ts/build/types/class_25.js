const products = [7, 8, 9, 6, 2];
const store = [1, 2, 3, 4];
const word = ['any', 'all', 'status'];
const people = [{ name: 'John' }, 1, true, 'any'];
console.log(`Product: ${products}`, `Store: ${store}`, `Words: ${word}`);
console.log(`People: ${people}`);
const coins = [
    {
        id: 1,
        name: 'pesos',
        code: '$',
    },
];
coins.push({
    id: 2, name: 'sol', code: '$',
});
let books = [
    {
        id: 1,
        name: 'Itp',
    },
];
books = [1, 2, 3, 4];
const dateOne = [1, '2', true];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
const c = Color.Red;
console.log(c, 'num3');
console.log(Color[1]);
var Dia;
(function (Dia) {
    Dia[Dia["Lunes"] = 1] = "Lunes";
    Dia[Dia["Martes"] = 2] = "Martes";
    Dia[Dia["Miercoles"] = 3] = "Miercoles";
})(Dia || (Dia = {}));
const d = Dia.Martes;
console.log(d, 'da');
var Day;
(function (Day) {
    Day[Day["id"] = 10] = "id";
    Day[Day["type"] = 2] = "type";
    Day[Day["name"] = 15] = "name";
    Day[Day["product"] = 16] = "product";
})(Day || (Day = {}));
const day = Day.id;
console.log(day, 'id');
console.log(Day[10], 'day');
function saludar() {
    const aux = [1, 2, 3, 4, 5, 6];
    let sum = 0;
    for (let i = 0; i < aux.length; i++) {
        sum += aux[i];
    }
    console.log(`Hola, la suma es: ${sum}`);
}
function llegada() {
    const come = 'Has llegado';
    return come;
}
console.log(`Books: ${books}`, `DateOne: ${dateOne}`);
saludar();
console.log(llegada());
let car = {
    make: 'Toyota',
    model: 'Camryn',
    year: 2000
};
let pets = {
    name: 'rex',
    specie: 'canino',
    state: true,
    age: 2
};
let nothing = null;
nothing = 'Hello, world';
let notDefined = undefined;
let value = false;
value = 'true';
console.log(`El valor es: ${value}`);
const mixed = [
    [1, 'one'],
    [2, 'two'],
    [3, 'three']
];
const colors = ['red', 'green', 'blue'];
console.log(colors[0], 'colorsOne');
console.log(colors[1], 'colorsTwo');
const numberOne = [1, 2, 3, 4, 5];
numberOne.push(6);
numberOne.pop();
const index = numberOne.indexOf(3);
const sliced = numberOne.slice(1, 4);
const square = numberOne.map((num) => num % 2 === 0);
const evenNumber = numberOne.filter((num) => num % 2 === 0);
const sum = numberOne.reduce((acumulador, currentValue) => acumulador + currentValue, 0);
const sentences = 'Hello world TypeScript is great';
const words = sentences.split(' ');
console.log(words);
const joinedSentences = words.join(' ');
console.log(joinedSentences, 'joined sentences');
const csv = words.join(',');
console.log(csv, 'csv');
const numbersTwo = [10, 20, 30, 40, 50];
const foundNumber = numbersTwo.find((num) => num > 25);
const foundIndex = numbersTwo.findIndex((num) => num > 25);
const allPositve = numbersTwo.every((num) => num > 0);
const someGreaterThan40 = numbersTwo.some((num) => num > 40);
const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
const concatNumbers = array1.concat(array2);
const pushNumbers = array1.push(...array2);
const unsortedNumbers = [11, 12, 13, 14, 15, 16];
const sortedNumbers = unsortedNumbers.sort((a, b) => a - b);
const nameS = ['Romer', 'Nico', 'Juan', 'Esteban'];
const sortName = nameS.sort();
const reversedNumbers = sortedNumbers.reverse();
let auxNumbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 1];
let aut;
for (let i = 0; i < auxNumbersArray.length; i++) {
    if (!(aut.includes(auxNumbersArray[i]))) {
        aut.push(auxNumbersArray[i]);
    }
}
console.log(aut, 'aut');
const hasFour = numbersTwo.includes(4);
//# sourceMappingURL=class_25.js.map