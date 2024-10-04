console.log('\n Punto 1');
const auxNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(auxNumber, 'number');
console.log('\n a)\n');
auxNumber.push(10);
auxNumber.push(12);
auxNumber.push(15);
auxNumber.push(16);
auxNumber.push(17);
console.log(auxNumber, 'push');
console.log('\n b)\n');
auxNumber.pop();
console.log(auxNumber, 'pop');
console.log('\n c)\n');
const indexAuxNumber1 = auxNumber.indexOf(1);
const indexAuxNumber4 = auxNumber.indexOf(4);
const indexAuxNumber7 = auxNumber.indexOf(7);
console.log(indexAuxNumber1, indexAuxNumber4, indexAuxNumber7, 'indexOf');
console.log('\n d)\n');
const slicedAuxNumber = auxNumber.slice(2, 9);
console.log(slicedAuxNumber, 'slice');
console.log('\n e)\n');
const allPositveAuxNumber = auxNumber.every((num) => num > 1);
console.log(allPositveAuxNumber, 'every');
console.log('\n f)\n');
const someAuxNumber = auxNumber.some((num) => num > 7);
console.log(someAuxNumber, 'some');
console.log('\n Punto 2');
console.log('\n a)\n');
const auxString = ['1', '2', '3', '4', '5', '6', '7'];
console.log(auxString, 'string');
console.log('\n b)\n');
auxString.push('10');
auxString.push('11');
auxString.push('12');
auxString.push('13');
auxString.push('14');
console.log(auxString, 'push');
console.log('\n c)\n');
const indexAuxString10 = auxString.indexOf('10');
const indexAuxString11 = auxString.indexOf('11');
const indexAuxString14 = auxString.indexOf('14');
console.log(indexAuxString10, indexAuxString11, indexAuxString14, 'indexOf');
console.log('\n Punto 3');
const message = 'Bienvenido al Itp';
console.log(message, 'string');
console.log('\n a)\n');
const splitMessage = message.split(' ');
console.log(splitMessage, 'split');
console.log('\n b)\n');
const joinedSplitMessage = splitMessage.join(',');
console.log(joinedSplitMessage, 'join');
console.log('\n Punto 4');
const names = 'Michael, Anderson, Yadir, Kevin, Emerson';
console.log(names, 'string');
console.log('\n a)\n');
const splitNames = names.split(',');
console.log(splitNames, 'split');
console.log('\n b)\n');
const joinedSplitNames = splitNames.join(' ');
console.log(joinedSplitNames, 'join');
console.log('\n Punto 5');
const arrayProducts = [{
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
console.log('\n a.1)\n');
const filterNumber = arrayProducts.filter((num) => num.price > 900);
console.log(filterNumber, 'filter');
console.log('\n a).2\n');
const forArraysProducts = [];
for (let i = 0; i < arrayProducts.length; i += 1) {
    if (arrayProducts[i].price > 900) {
        forArraysProducts.push(arrayProducts[i]);
    }
}
console.log(forArraysProducts, ' cycle for');
console.log('\n b)\n');
const foundArrayProducts = arrayProducts.find((num) => num.priceDiscount > 500);
console.log(foundArrayProducts, 'find');
console.log('\n c)\n');
const foundIndexArrayProducts = arrayProducts.findIndex((num) => num.price > 1000);
console.log(foundIndexArrayProducts, 'findIndex');
console.log('\n d)\n');
arrayProducts.push({
    id: 3, name: 'mayonesa', price: 5000, priceDiscount: 2000,
});
arrayProducts.push({
    id: 4, name: 'ketchup', price: 4500, priceDiscount: 1800,
});
arrayProducts.push({
    id: 5, name: 'mostaza', price: 3500, priceDiscount: 1500,
});
console.log(arrayProducts, 'push');
console.log('\n Punto 6');
const array01 = [1, 2, 3, 4];
const array02 = [6, 7, 8, 9];
console.log(array01);
console.log(array02);
console.log('\n a).1\n');
const concatArray03 = array01.concat(array02);
console.log(concatArray03, 'concat');
console.log('\n a).2\n');
const pushArray03 = (array01.push(...array02));
console.log(pushArray03, 'push');
console.log(array01, 'new array01 value');
console.log('\n b)\n');
const sortedArrays = concatArray03.sort((a, b) => a - b);
console.log(sortedArrays, 'sort<>');
console.log('\n c)\n');
const reversedArrays = sortedArrays.reverse();
console.log(reversedArrays, 'reverse');
console.log('\n The next trial is present by Esteban Pantoja');
//# sourceMappingURL=Trial_functions_TypeScript.js.map