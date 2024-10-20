// Clase padre
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Person {
  private id: number;

  public name: string;

  protected email: string;

  constructor(id: number, name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  public greet(): void {
    console.log(`ID: ${this.id},\n Name: ${this.name},\n Email: ${this.email}`);
  }
}
