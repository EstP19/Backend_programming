// Tipos básicos
const username: string = 'JhonDoe';
const age: number = 30;
const isActive: boolean = false;
const data: any = 'Could be any type';
console.log(`Username ${username}`, `Age: ${age}`, `IsActive: ${isActive}`, `Data: ${data}`);
let dog: string = '';
dog = 'rex';

let countStudents: number = 0;
countStudents = 24;

const actions: boolean = false;

const actionsOne: any = [
  { name: 'Esteban' },
  { name: 'Romer' },
  { name: 'Juan' },
  { name: 'Nicolas' },
];

console.log(`Dog: ${dog}`, `CounStudent: ${countStudents}`, `Actions: ${actions}`, `ActionsOne: ${actionsOne}`);

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
  for (let i = 0; i < aux.length; i++) {
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

//objects

let car: {make: string, model: string, year: number} = {
  make: 'Toyota',
  model: 'Camryn',
  year: 2000
}

let pets: {name: string, specie: string, state: boolean, age: number} = {
  name: 'rex',
  specie: 'canino',
  state: true,
  age: 2
}

// null and undefined

let nothing: any = null;
nothing = 'Hello, world';
let notDefined: undefined = undefined;

// union

let value: number | string | boolean = false;
value = 'true';

console.log(`El valor es: ${value}`);

//arrays

// arrays tupla
const mixed: [number, string][] = [
  [1, 'one'],
  [2, 'two'],
  [3, 'three']
];

// acceso a elementos
const colors: string[] = ['red', 'green', 'blue'];
console.log(colors[0], 'colorsOne');
console.log(colors[1], 'colorsTwo');

// Manipulacion de Arrays
const numberOne: number[] = [1, 2, 3, 4, 5];

// Añadir
numberOne.push(6);

// Eliminar
numberOne.pop();

// Encontrar el indice de un elemento
const index = numberOne.indexOf(3); // 2

// Extraer na parte del array
const sliced = numberOne.slice(1, 4); // [2, 3, 4]
