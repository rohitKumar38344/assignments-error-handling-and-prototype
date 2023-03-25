// QUESTION: 5

class Person {
  constructor(name = "Unknown", age = 0) {
    this.name = name;
    this.age = age;
  }

  getDetails() {
    return `Name : ${this.name}, Age: ${this.age}`;
  }
}

const p1 = new Person();
console.log(p1.getDetails());

const p2 = new Person("mukesh", 34);
console.log(p2.getDetails());
