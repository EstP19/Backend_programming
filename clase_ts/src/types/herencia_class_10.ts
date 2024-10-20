// Clase hija (hereda de Person)
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, email: string, position: string) {
    super(id, name, email); // Llama al constructor de la clase padre
    this.position = position;
  }

  work(): void {
    console.log(`${this.name} is working as a ${this.position} \n ${this.email}`);
  }
}

// Crear una instancia de Employee
const employee: Employee = new Employee(1, 'John Doe', 'john@example.com', 'Software Engineer');

console.log(employee.greet()); // ID: 1, Name: John Doe, Email: john@example.com
console.log(employee.work()); // ID: 1, Name: John Doe, Email: john@example.com, Position: Software Engineer
