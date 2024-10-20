class Library {
    constructor() {
        this.BooksAdd2 = [];
    }
    addBook(book) {
        this.BooksAdd2.push(book);
    }
    getBooksAddByAuthor(author) {
        return this.BooksAdd2.filter((BooksAdd) => BooksAdd.author === author);
    }
    getAllBooksAdd() {
        return this.BooksAdd2;
    }
    removeBookByTitle(title) {
        this.BooksAdd2 = this.BooksAdd2.filter((BooksAdd) => BooksAdd.title !== title);
    }
}
console.log('Punto 6');
const library = new Library();
library.addBook({ title: 'Matar a un ruiseñor', author: 'Harper Lee', year: 1960 });
library.addBook({ title: '1984', author: 'George Orwell', year: 1949 });
library.addBook({ title: 'Cien sonetos de amor', author: 'Pablo Neruda', year: 1959 });
library.addBook({ title: 'El Hobbit', author: 'J.R.R. Tolkien', year: 1937 });
library.addBook({ title: 'Don Quijote de la Mancha', author: 'Miguel de Cervantes', year: 1605 });
console.log('BooksAdd by George Orwell: ', library.getBooksAddByAuthor('George Orwell'));
console.log('All BooksAdd: ', library.getAllBooksAdd());
library.removeBookByTitle('1984');
library.removeBookByTitle('Matar a un ruiseñor');
console.log('All BooksAdd after removal: ', library.getAllBooksAdd());
console.log('\n', '\n');
function sumEvenNumbers() {
    let sumPairs = 0;
    for (let i = 1; i <= 100; i += 1) {
        if (i % 2 === 0) {
            sumPairs += i;
        }
    }
    return sumPairs;
}
console.log('Punto 7.1');
console.log('Sum of even numbers from 1 to 100: ', sumEvenNumbers());
console.log('\n', '\n');
function countOddNumbers() {
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
console.log('Count of odd numbers from 1 to 30: ', countOddNumbers());
console.log('\n', '\n');
function isPrime(num) {
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
console.log('Punto 7.3');
console.log('Prime numbers from 1 to 100: ');
for (let i = 1; i <= 100; i += 1) {
    if (isPrime(i)) {
        console.log(i);
    }
}
console.log('\n', '\n');
//# sourceMappingURL=trial_functions_2.js.map