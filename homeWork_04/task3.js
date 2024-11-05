// Использование литерала
const Person = {
    name: 'John',
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

Object.prototype.logInfo = function () {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
};

const Person2 = Object.create(Person);
Person2.name = 'Alice';
Person2.age = 25;

Person2.greet();    // "Hello, my name is Alice"
Person2.logInfo();  // "Name: Alice, Age: 25"





// Использование функции-конструктора
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
};

Person.prototype.logInfo = function () {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
};

const person1 = new Person('John', 30);

function Person2(name, age) {
    Person.call(this, name, age);
}

Person2.prototype = Object.create(Person.prototype);
Person2.prototype.constructor = Person2;

const person2 = new Person2('Alice', 25);

person2.greet();    // "Hello, my name is Alice"
person2.logInfo();  // "Name: Alice, Age: 25"





// Использование класса
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

class Person2 extends Person {
    constructor(name, age) {
        super(name, age);
    }
}

const person1 = new Person('John', 30);
const person2 = new Person2('Alice', 25);

person2.greet();    // "Hello, my name is Alice"
person2.logInfo();  // "Name: Alice, Age: 25"
