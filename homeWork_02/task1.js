// с помощью литеральной (инициирующей) нотации
const counter1 = {
    count: 0,
    increment() {
        this.count++;
    },
    decrement() {
        this.count--;
    },
    value() {
        return this.count;
    }
};

// используя функцию конструктор
function Counter() {
    this.count = 0;
}

Counter.prototype.increment = function () {
    this.count++;
};

Counter.prototype.decrement = function () {
    this.count--;
};

Counter.prototype.value = function () {
    return this.count;
};

const counter2 = new Counter();

// используя классы
class CounterClass {
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count++;
    }

    decrement() {
        this.count--;
    }

    value() {
        return this.count;
    }
}

const counter3 = new CounterClass();

// используя Object.create()
const counterMethods = {
    increment() {
        this.count++;
    },
    decrement() {
        this.count--;
    },
    value() {
        return this.count;
    }
};

const counter4 = Object.create(counterMethods);
counter4.count = 0;


// используя Factory Function
function createCounter() {
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

const counter5 = createCounter();


// используя Module Pattern
const counter6 = (function () {
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
})();
