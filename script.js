// complete this js code
function Person(name, age) {
	this.name = name;
	this.age = age;
}
Person.prototype.greet = function(){
	console.log(`Hello! my name is ${this.name}, I am ${this.age} year old`)
}
function Employee(name, age, jobTitle) {
	Person.call(this, name, age);
	this.jobTitle = jobTitle;
}

Employee.prototype.jobGreet = functio(){
	console.log(`Hello! my name is ${this.name}, I am ${this.age} year old, my job Title is ${this.jobTitle}`);
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
