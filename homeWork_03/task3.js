// Массивы:

// Создайте массив чисел и найдите его сумму.
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

// Создайте массив строк и объедините их в одну строку.
const strings = ["Hello", "world", "!"];
const concatenatedString = strings.join(" ");
console.log(concatenatedString); // "Hello world !"

// Найдите максимальный и минимальный элементы в массиве чисел.
const max = Math.max(...numbers);
const min = Math.min(...numbers);
console.log(`Max: ${max}, Min: ${min}`); // Max: 5, Min: 1

// Реализуйте стек с использованием массива.
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) return "Stack is empty";
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
console.log(stack.pop()); // 2

// Реализуйте очередь с использованием массива.

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) return "Queue is empty";
        return this.items.shift();
    }

    front() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

const queue = new Queue();
queue.enqueue("Customer 1");
queue.enqueue("Customer 2");
queue.enqueue("Customer 3");

function serveCustomer(queue) {
    if (!queue.isEmpty()) {
        const customer = queue.dequeue();
        console.log(`${customer} is being served`);

        // Имитируем задержку обслуживания каждого клиента
        setTimeout(() => {
            console.log(`${customer} has finished checkout.`);
            serveCustomer(queue); // Рекурсивно вызываем для следующего клиента
        }, 2000); // 2 секунды для имитации обработки
    } else {
        console.log("No more customers in queue.");
    }
}

serveCustomer(queue);
