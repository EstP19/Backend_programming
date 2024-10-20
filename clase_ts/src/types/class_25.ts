const products: Array<number> = [7, 8, 9, 6, 2];
const store: number[] = [1, 2, 3, 4];
const word: string[] = ['any', 'all', 'status'];
const people: any[] = [{ name: 'John' }, 1, true, 'any'];

console.log(`Product: ${products}`, `Store: ${store}`, `Words: ${word}`);
console.log(`People: ${people}`);

const coins: any[] = [
  {
    id: 1, // id: clave, 1 es el valor
    name: 'pesos',
    code: '$',
  },
];
coins.push({
  id: 2, name: 'sol', code: '$',
});

let books: any[] = [
  {
    id: 1,
    name: 'Itp',
  },
];
books = [1, 2, 3, 4];

const dateOne: [number, string, boolean] = [1, '2', true]; // tipo tupla

enum Color { Red, Green, Blue } // Tipos enum
const c: Color = Color.Red;
console.log(c, 'num3');
console.log(Color[1]);
enum Dia { Lunes = 1, Martes, Miercoles}
const d: Dia = Dia.Martes;
console.log(d, 'da');
enum Day { id = 10, type = 2, name = 15, product} // si no se inicializa el atributo entrega la posicion, de lo contrario entrega el valor
const day: Day = Day.id;
console.log(day, 'id');
console.log(Day[10], 'day');

// void
function saludar(): void {
  const aux : any = [1, 2, 3, 4, 5, 6];
  let sum = 0;
  for (let i = 0; i < aux.length; i = +1) {
    sum += aux[i];
  }
  console.log(`Hola, la suma es: ${sum}`);
}
function llegada(): string {
  const come: string = 'Has llegado';
  return come;
}

console.log(`Books: ${books}`, `DateOne: ${dateOne}`);
saludar();

console.log(llegada());

// objects

const car: { make: string, model: string, year: number } = {
  make: 'Toyota',
  model: 'Camryn',
  year: 2000,
};

const pets: { name: string, specie: string, state: boolean, age: number } = {
  name: 'rex',
  specie: 'canino',
  state: true,
  age: 2,
};

console.log(car, 'car', '\n', pets, 'pets');
// null and undefined

let nothing: any = null;
nothing = 'Hello, world';

const notDefined: undefined = undefined;

console.log(nothing, 'nothing', '\n', notDefined, 'notDefined');

// union

let value: number | string | boolean = false;
value = 'true';

console.log(`El valor es: ${value}`);

// arrays

// arrays tupla
const mixed: [number, string][] = [
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
];

console.log(mixed, 'mixed');

// Acceder a los elementos
const colors: string[] = ['red', 'green', 'blue'];
console.log(colors[0], 'colorsOne');
console.log(colors[1], 'colorsTwo');

// Manipulacion de Arrays
const numberOne: number[] = [1, 2, 3, 4, 5];

// Añadir a la ultima posición del array
numberOne.push(6);

// Eliminar ultimo elemento del array
numberOne.pop();

// Encontrar el indice de un elemento
const index = numberOne.indexOf(3); // 2

// Extraer la parte del array
const sliced = numberOne.slice(1, 4); // [2, 3, 4]

// Usar map para transformar los elementos
const square = numberOne.map((num) => num % 2 === 0);

// Usar filter para seleccionar el elemento
const evenNumber = numberOne.filter((num) => num % 2 === 0); // [2, 4]

// Usar reduce para sumar los elementos
const sum = numberOne.reduce((acumulador, currentValue) => acumulador + currentValue, 0); //

console.log(index, 'index', '\n', sliced, 'sliced', '\n', square, 'square', '\n', evenNumber, 'evenNumber', '\n', sum, 'sum');
// Cadena de texto separado por espacios
const sentences: string = 'Hello world TypeScript is great';

// funcion split separa una cadena de texto en un array
const words: string[] = sentences.split(' ');
console.log(words);

// unir un array de palabras en un sola cadena de texto
const joinedSentences: string = words.join(' ');
console.log(joinedSentences, 'joined sentences'); // 'Hello world TypeScript is great'

const csv : string = words.join(',');
console.log(csv, 'csv'); // 'Hello,world,TypeScript,is,great'

const numbersTwo: number[] = [10, 20, 30, 40, 50];

// Encontrar el primer número mayor a 25
const foundNumber: number | undefined = numbersTwo.find((num) => num > 25);

// Encontrar el indice del primer número mayor a 25
const foundIndex: number = numbersTwo.findIndex((num) => num > 25);

// Verificar si todos los numeros son mayores a 0
const allPositve: boolean = numbersTwo.every((num) => num > 0);

// Verficar si algun numero es mayor que 40
const someGreaterThan40: boolean = numbersTwo.some((num) => num > 40);

console.log(foundNumber, 'foundNumber', '\n', foundIndex, 'foundIndex', '\n', allPositve, 'allPositve', '\n', someGreaterThan40, 'someGreaterThan40');
// Arrays para combinar

const array1: number[] = [1, 2, 3, 4, 5];
const array2: number[] = [6, 7, 8, 9, 10];

// combinar array
const concatNumbers : number[] = array1.concat(array2);
const pushNumbers = array1.push(...array2);

console.log(concatNumbers, 'concatNumbers', pushNumbers, 'pushNumber');
const unsortedNumbers: number[] = [11, 12, 13, 14, 15, 16];

// ordena los elementos de un elemento
const sortedNumbers: number[] = unsortedNumbers.sort((a, b) => a - b);

// ordenar el array de palabras en orden alfabético
const nameS: string[] = ['Romer', 'Nico', 'Juan', 'Esteban'];
const sortName: string[] = nameS.sort();

console.log(sortName, 'sort');
// ordena el array de mayor a menor
const reversedNumbers: number[] = sortedNumbers.reverse();

console.log(reversedNumbers, 'reversedNumbers');

const auxNumbersArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 1];
let aut : any [ ];
for (let i = 0; i < auxNumbersArray.length; i = +1) {
  if (!(aut.includes(auxNumbersArray[i]))) {
    aut.push(auxNumbersArray[i]);
  }
}
console.log(aut, 'aut');

// verificar la existencia de un elemento
const hasFour: boolean = numbersTwo.includes(4);

console.log(hasFour, 'hasFour', '\n');
