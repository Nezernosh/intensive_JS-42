class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }

    logInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

class PersonThree extends Person {
    constructor(name, age) {
        super(name, age);
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }
}

const personThree = new PersonThree('Emily', 22);

console.log(personThree.name); // "Emily"

personThree.name = 'Emma';
console.log(personThree.name); // "Emma"

personThree.greet();    // "Hello, my name is Emma"
personThree.logInfo();  // "Name: Emma, Age: 22"
