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

const actionsOne = [
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

console.log(`Product: ${products}`, `Store: ${store}`, `Words: ${word}`, `¨People: ${people}`);

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

let dateOne: [number, string, boolean];
dateOne = [1, '2', true]; // tipo tupla
