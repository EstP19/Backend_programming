// Taller funciones TypeScript
// 1)number
console.log('\n Punto 1');
const auxNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(auxNumber, 'number');

// agregar al array por medio de push 10,12,15,16,17
console.log('\n a)\n');
auxNumber.push(10);
auxNumber.push(12);
auxNumber.push(15);
auxNumber.push(16);
auxNumber.push(17);
console.log(auxNumber, 'push');

// Eliminar el último elemento con pop
console.log('\n b)\n');
auxNumber.pop();
console.log(auxNumber, 'pop');

// Encontrar el indice de este elemento 1, 4 y 7 con indexof
console.log('\n c)\n');
const indexAuxNumber1 = auxNumber.indexOf(1);
const indexAuxNumber4 = auxNumber.indexOf(4);
const indexAuxNumber7 = auxNumber.indexOf(7);
console.log(indexAuxNumber1, indexAuxNumber4, indexAuxNumber7, 'indexOf');

// extraer una parte del array con slice [2,9]
console.log('\n d)\n');
const slicedAuxNumber = auxNumber.slice(2, 9);
console.log(slicedAuxNumber, 'slice');

// verificar si todos los elementos son mayores que 1 con every /true-false
console.log('\n e)\n');
const allPositveAuxNumber: boolean = auxNumber.every((num) => num > 1);
console.log(allPositveAuxNumber, 'every');

// verificar si algún elemento sea mayor o igual que 7 con some
console.log('\n f)\n');
const someAuxNumber: boolean = auxNumber.some((num) => num > 7);
console.log(someAuxNumber, 'some');

console.log('\n Punto 2');

// 2) string number
console.log('\n a)\n');
const auxString: string[] = ['1', '2', '3', '4', '5', '6', '7'];
console.log(auxString, 'string');

// agregar al array por medio de push 10,11,12,13,14 tipo string
console.log('\n b)\n');
auxString.push('10');
auxString.push('11');
auxString.push('12');
auxString.push('13');
auxString.push('14');
console.log(auxString, 'push');

// encontrar el indice de un elemento el 10, 11, 14 con indexof
console.log('\n c)\n');
const indexAuxString10 = auxString.indexOf('10');
const indexAuxString11 = auxString.indexOf('11');
const indexAuxString14 = auxString.indexOf('14');
console.log(indexAuxString10, indexAuxString11, indexAuxString14, 'indexOf');

console.log('\n Punto 3');
// 3) string
const message: string = 'Bienvenido al Itp';
console.log(message, 'string');

// dividir la cadena en un array de palabras donde el separador sea un espacio por split
console.log('\n a)\n');
const splitMessage: string[] = message.split(' ');
console.log(splitMessage, 'split');

// sumar ese resultado y aplicar un join separados por ","
console.log('\n b)\n');
const joinedSplitMessage: string = splitMessage.join(',');
console.log(joinedSplitMessage, 'join');

console.log('\n Punto 4');
// 4) cadenas

const names: string = 'Michael, Anderson, Yadir, Kevin, Emerson';
console.log(names, 'string');

// dividir la cadena en un array de palabras donde el separados sea las "," por split}
console.log('\n a)\n');
const splitNames: string[] = names.split(',');
console.log(splitNames, 'split');

// aplicar el join pero debe ser separado por espacios
console.log('\n b)\n');
const joinedSplitNames: string = splitNames.join(' ');
console.log(joinedSplitNames, 'join');

console.log('\n Punto 5');
// 5) objetos
const arrayProducts: any[] = [{
  id: 1,
  name: 'arroz',
  price: 1000,
  priceDiscount: 700,
},
{
  id: 2,
  name: 'atún',
  price: 2500,
  priceDiscount: 1500,
}];
console.log(arrayProducts);

// Vamos a filtrar en una constante donde el price sea mayor de 900 por medio de filter y for
console.log('\n a.1)\n');
const filterNumber = arrayProducts.filter((num) => num.price > 900);
console.log(filterNumber, 'filter');

console.log('\n a).2\n');
const forArraysProducts : any[] = [];
for (let i = 0; i < arrayProducts.length; i += 1) {
  if (arrayProducts[i].price > 900) {
    forArraysProducts.push(arrayProducts[i]);
  }
}
console.log(forArraysProducts, ' cycle for');

// Encontrar el primer objeto del array donde el priceDiscount sea mayor a 500 find
console.log('\n b)\n');
const foundArrayProducts: number | undefined = arrayProducts.find((num) => num.priceDiscount > 500);
console.log(foundArrayProducts, 'find');

// Encontrar el indice del primer elemento del array donde el price sea mayor a 1000 findindex
console.log('\n c)\n');
const foundIndexArrayProducts: number = arrayProducts.findIndex((num) => num.price > 1000);
console.log(foundIndexArrayProducts, 'findIndex');

// agregar un nuevo objeto de un producto de una tienda por medio de push
console.log('\n d)\n');
arrayProducts.push(
  {
    id: 3, name: 'mayonesa', price: 5000, priceDiscount: 2000,
  },
);
arrayProducts.push(
  {
    id: 4, name: 'ketchup', price: 4500, priceDiscount: 1800,
  },
);
arrayProducts.push(
  {
    id: 5, name: 'mostaza', price: 3500, priceDiscount: 1500,
  },
);
console.log(arrayProducts, 'push');

console.log('\n Punto 6');
// Punto 6)
const array01: number[] = [1, 2, 3, 4];
const array02: number[] = [6, 7, 8, 9];

console.log(array01);
console.log(array02);

// concatenar el array01 y array02 con concat y push
console.log('\n a).1\n');
const concatArray03 : number[] = array01.concat(array02);
console.log(concatArray03, 'concat');

console.log('\n a).2\n');

const pushArray03 = (array01.push(...array02));
console.log(pushArray03, 'push');
console.log(array01, 'new array01 value');

// a la respuesta ordenar de < a > por sort
console.log('\n b)\n');
const sortedArrays: number[] = concatArray03.sort((a, b) => a - b);
console.log(sortedArrays, 'sort<>');
// ordenar de forma descendente por medio de reverse
console.log('\n c)\n');
const reversedArrays: number[] = sortedArrays.reverse();
console.log(reversedArrays, 'reverse');

console.log('\n The next trial is present by Esteban Pantoja');
