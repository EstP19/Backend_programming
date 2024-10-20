console.log('4.Define una interfaz Shape que tenga propiedades para calcular el área y una clase Rectangle que implemente esta interfaz');

interface Shape {
  thisBase: number;
  thisHeight: number;
  area(): number;
}

class Rectangle implements Shape {
  // propiedades
  public thisBase: number;

  public thisHeight: number;

  // constructor
  constructor(thisBase: number, thisHeight: number) {
    this.thisBase = thisBase;
    this.thisHeight = thisHeight;
  }
  // metodo

  area(): number {
    return this.thisBase * this.thisHeight;
  }
}
console.log('\n');
console.log('Punto 4');
console.log('\n');
const rectangle1 = new Rectangle(2, 3);
const rectangle2 = new Rectangle(10, 30);
const rectangle3 = new Rectangle(100, 25);
console.log('Rectangle area 1: ', rectangle1.area());
console.log('Rectangle area 2: ', rectangle2.area());
console.log('Rectangle area 3: ', rectangle3.area());
console.log('\n', '\n');

console.log('5.Crea un arreglo de objetos que representen libros, cada uno con propiedades como title, author, y usa filter para obtener solo los libros de un autor específico.');
console.log('\n');
interface Books {
  title: string;
  author: string;
}

// arreglo de libros
const thisBooksTitleAuthor: Books[] = [
  { title: 'Matar a un ruiseñor', author: 'Harper Lee' },
  { title: '1984', author: 'George Orwell' },
  { title: 'Cien sonetos de amor', author: 'Pablo Neruda' },
  { title: 'El Hobbit', author: 'J.R.R. Tolkien' },
  { title: 'Don Quijote de la Mancha', author: 'Miguel de Cervantes' },
];

function getBooksByAuthor(author: string): Books[] {
  return thisBooksTitleAuthor.filter((Books) => Books.author === author);
}

console.log('Punto 5');
console.log('\n');
console.log('Books by Harper Lee:', getBooksByAuthor('Harper Lee'));
console.log('Books by George Orwell:', getBooksByAuthor('George Orwell'));
console.log('\n');
