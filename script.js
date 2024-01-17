// Constructor function for Person
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Method added to the Person prototype
Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`);
};

// Constructor function for Employee, inheriting from Person
function Employee(name, age, jobTitle) {
    // Call the Person constructor with the necessary parameters
    Person.call(this, name, age);
    this.jobTitle = jobTitle;
}

// Inherit the Person prototype into the Employee prototype
Employee.prototype = Object.create(Person.prototype);

// Add a method to the Employee prototype
Employee.prototype.jobGreet = function () {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}`);
};

// Example usage
const person = new Person("Alice", 25);
person.greet(); // Output: Hello, my name is Alice, I am 25 years old

const employee = new Employee("Bob", 30, "Software Engineer");
employee.greet(); // Output: Hello, my name is Bob, I am 30 years old
employee.jobGreet(); // Output: Hello, my name is Bob, I am 30 years old, and my job title is Software Engineer


// Do not change the code below this line
window.Person = Person;
window.Employee = Employee;
