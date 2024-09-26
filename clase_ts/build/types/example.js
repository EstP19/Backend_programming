const username = 'JhonDoe';
const age = 30;
const isActive = false;
const data = 'Could be any type';
console.log(`Username ${username}`, `Age: ${age}`, `IsActive: ${isActive}`, `Data: ${data}`);
let dog = '';
dog = 'rex';
let countStudents = 0;
countStudents = 24;
const actions = false;
const actionsOne = [
    { name: 'Esteban' },
    { name: 'Romer' },
    { name: 'Juan' },
    { name: 'Nicolas' },
];
console.log(`Dog: ${dog}`, `CounStudent: ${countStudents}`, `Actions: ${actions}`, `ActionsOne: ${actionsOne}`);
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
//# sourceMappingURL=example.js.map