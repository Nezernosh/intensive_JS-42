// function declaration
function makeCounter() {
    let count = 0;
    return {
        increment() {
            count++;
        },
        decrement() {
            count--;
        },
        value() {
            return count;
        }
    };
}

const counter = makeCounter();
counter.increment();
console.log(counter.value());





// function expression
const makeCounter = function () {
    let count = 0;
    return {
        increment() {
            count++;
        },
        decrement() {
            count--;
        },
        value() {
            return count;
        }
    };
};

const counter = makeCounter();
counter.increment();
console.log(counter.value());





// arrow function
const makeCounter = () => {
    let count = 0;
    return {
        increment: () => count++,
        decrement: () => count--,
        value: () => count
    };
};

const counter = makeCounter();
counter.increment();
console.log(counter.value());





// named function expression
const makeCounter = function counterFactory() {
    let count = 0;
    return {
        increment() {
            count++;
        },
        decrement() {
            count--;
        },
        value() {
            return count;
        }
    };
};

const counter = makeCounter();
counter.increment();
console.log(counter.value());






// anonymous function
const makeCounter = function () {
    let count = 0;
    return {
        increment() { count++; },
        decrement() { count--; },
        value() { return count; }
    };
};


const counter = makeCounter();
counter.increment();
console.log(counter.value());






// callback function to initialize
function makeCounter(initFunction) {
    let count = initFunction();
    return {
        increment() { count++; },
        decrement() { count--; },
        value() { return count; }
    };
}

const counter = makeCounter(() => 0);
counter.increment();
console.log(counter.value());






// as a callback function
function executeCounter(callback) {
    callback();
}

function makeCounter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}

executeCounter(makeCounter());




// constructor function
function MakeCounter() {
    let count = 0;
    this.increment = function () {
        count++;
    };
    this.decrement = function () {
        count--;
    };
    this.value = function () {
        return count;
    };
}

const counter = new MakeCounter();
counter.increment();
console.log(counter.value());






// higher-order function returning a function
function makeCounter() {
    let count = 0;
    return function () {
        return ++count;
    };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2





// accepting a function to modify the count (higher-order)
function makeCounter(modifyFunction) {
    let count = 0;
    return {
        change() {
            count = modifyFunction(count);
        },
        value() {
            return count;
        }
    };
}

const increment = (n) => n + 1;
const counter = makeCounter(increment);
counter.change();
console.log(counter.value()); // 1
