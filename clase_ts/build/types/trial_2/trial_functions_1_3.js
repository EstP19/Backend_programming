console.log('TRIAL 2°');
console.log('\n');
console.log('Yesi Esteban Pantoja Cuellar');
console.log('\n');
console.log('1.Declara variables utilizando todos los tipos primitivos mencionados');
const thisNumber = 1;
const thisString = 'Hola esto es un String';
const thisBool = true;
const thisNull = null;
const thisUndefined = undefined;
const thisNumber2 = 4;
const thisNameSubject = 'Backend Programming';
console.log('POINT 1');
console.log('\n');
console.log(' Number: ', thisNumber, '\n', 'String: ', thisString, '\n', 'Boolean: ', thisBool, '\n', 'Null: ', thisNull, '\n', 'Undefined: ', thisUndefined, '\n', 'Number#2: ', thisNumber2, '\n', ' Name Subject: ', thisNameSubject);
console.log('\n');
console.log('2.Crea una función que calcule el área de un rectángulo, tomando la base y la altura como parámetros');
function rectangleArea(thisBase, thisHeight) {
    return thisBase * thisHeight;
}
console.log('Punto 2');
console.log('\n');
console.log('Rectangle area: ', rectangleArea(5, 8));
console.log('\n');
console.log('3.Crea una clase Car que tenga propiedades como name, typeAnimal, y un método para mostrar su información');
class Pets {
    constructor(name, typeAnimal) {
        this.name = name;
        this.typeAnimal = typeAnimal;
    }
    showInfo() {
        return `Name: ${this.name}, Type Animal: ${this.typeAnimal}`;
    }
}
console.log('Point 3');
console.log('\n');
const pet1 = new Pets('Michu', 'Cat');
const pet2 = new Pets('Zeus', 'Dog');
console.log(pet1.showInfo());
console.log(pet2.showInfo());
console.log('\n');
//# sourceMappingURL=trial_functions_1_3.js.map