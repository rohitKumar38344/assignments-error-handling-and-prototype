// QUESTION: 8

class Student {
  constructor(name) {
    this.name = name;
  }

  printDetails() {
    console.log(`Hello, the student is ${this.name}`);
  }
}

const stud = new Student("raman");
stud.printDetails();
