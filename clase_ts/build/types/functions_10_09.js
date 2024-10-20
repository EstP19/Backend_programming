function addOne(a, b) {
    return a + b;
}
function greetOne(name, greeting = 'Hello') {
    return `${name}, ${greeting}`;
}
function printNumberOne(...numbers) {
    console.log(numbers.join(','));
}
console.log('functions');
const responseFunction = addOne(5, 10);
console.log(responseFunction, 'responseFunction');
console.log(addOne(5, 10));
console.log(greetOne('John'));
printNumberOne(1, 2, 3, 4, 5);
//# sourceMappingURL=functions_10_09.js.map