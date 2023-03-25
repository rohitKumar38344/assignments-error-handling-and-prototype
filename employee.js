// QUESTION: 4

class Employee {
  constructor(n, p, s) {
    this.name = n;
    this.position = p;
    this.salary = s;
  }

  getSalary() {
    return this.salary;
  }
}

const employee1 = new Employee("raman", "testing", "85000");

console.log(employee1.getSalary());
