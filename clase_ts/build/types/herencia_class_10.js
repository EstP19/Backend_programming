class Employee extends Person {
    constructor(id, name, email, position) {
        super(id, name, email);
        this.position = position;
    }
    work() {
        console.log(`${this.name} is working as a ${this.position} \n ${this.email}`);
    }
}
const employee = new Employee(1, 'John Doe', 'john@example.com', 'Software Engineer');
console.log(employee.greet());
console.log(employee.work());
//# sourceMappingURL=herencia_class_10.js.map