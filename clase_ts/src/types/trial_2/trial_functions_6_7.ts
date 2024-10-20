console.log('6.Crea un pequeño programa que utilice todos los conceptos anteriores:');
console.log('Define una interfaz Book que tenga title, author, y year.');
console.log('Crea una clase Library que tenga un arreglo de libros y métodos para agregar y buscar libros por autor.');
console.log('Usa métodos de clase y arreglos para interactuar con la biblioteca');

interface BooksAdd {
  title: string;
  author: string;
  year: number;
}

class Library {
  private BooksAdd2: BooksAdd[] = [];

  addBook(book: BooksAdd): void {
    this.BooksAdd2.push(book);
  }

  getBooksAddByAuthor(author: string): BooksAdd[] {
    return this.BooksAdd2.filter((BooksAdd) => BooksAdd.author === author);
  }

  getAllBooksAdd(): BooksAdd[] {
    return this.BooksAdd2;
  }

  removeBookByTitle(title: string): void {
    this.BooksAdd2 = this.BooksAdd2.filter((BooksAdd) => BooksAdd.title !== title);
  }
}
console.log('\n');
console.log('Punto 6');
console.log('\n');
const library = new Library();
library.addBook({ title: 'Matar a un ruiseñor', author: 'Harper Lee', year: 1960 });
library.addBook({ title: '1984', author: 'George Orwell', year: 1949 });
library.addBook({ title: 'Cien sonetos de amor', author: 'Pablo Neruda', year: 1959 });
library.addBook({ title: 'El Hobbit', author: 'J.R.R. Tolkien', year: 1937 });
library.addBook({ title: 'Don Quijote de la Mancha', author: 'Miguel de Cervantes', year: 1605 });

// Imprimir libros por autor
console.log('BooksAdd by George Orwell: ', library.getBooksAddByAuthor('George Orwell'));
console.log('All BooksAdd: ', library.getAllBooksAdd());

// Eliminar libros por título
library.removeBookByTitle('1984');
library.removeBookByTitle('Matar a un ruiseñor');

// Imprimir libros después de la eliminación
console.log('All BooksAdd after removal: ', library.getAllBooksAdd());
console.log('\n');

console.log('7. Uso de ciclos');
console.log('\n');
/*  1. Escribe un programa que sumPairse todos los números pares del 1 al 100

    2. Contar números impares con while, que hay entre 1 y 30.

    3. Imprimir números primos con for y if */

console.log('7.1. Escribe un programa que sume todos los números pares del1 al 100');
function sumEvenNumbers(): number {
  let sumPairs = 0;
  for (let i = 1; i <= 100; i += 1) {
    if (i % 2 === 0) {
      sumPairs += i;
    }
  }
  return sumPairs;
}
console.log('\n');
console.log('Punto 7.1');
console.log('\n');
console.log('Sum of even numbers from 1 to 100: ', sumEvenNumbers());
console.log('\n');

console.log('7.2. Contar números impares con while, que hay entre 1 y 30.');
console.log('\n');
function countOddNumbers(): number {
  let count = 0;
  let i = 1;
  while (i <= 30) {
    if (i % 2 !== 0) {
      count += 1;
    }
    i += 1;
  }
  return count;
}
console.log('Punto 7.2');
console.log('\n');
console.log('Count of odd numbers from 1 to 30: ', countOddNumbers());
console.log('\n');

console.log('7.3. Imprimir números primos con for y con if');
function isPrime(num: number): boolean {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log('\n');
console.log('Punto 7.3');
console.log('\n');
console.log('Prime numbers from 1 to 100: ');
for (let i = 1; i <= 100; i += 1) {
  if (isPrime(i)) {
    console.log(i);
  }
}
console.log('\n');
