function addOne(a: number, b: number) : number {
  return a + b;
}

function greetOne(name: string, greeting: string = 'Hello') : string {
  return `${name}, ${greeting}`;
}

function printNumberOne(...numbers: number[]): void {
  console.log(numbers.join(','));
}

console.log('functions');
const responseFunction : number = addOne(5, 10);
console.log(responseFunction, 'responseFunction');
console.log(addOne(5, 10));
console.log(greetOne('John'));
printNumberOne(1, 2, 3, 4, 5);
