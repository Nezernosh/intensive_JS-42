
#### Паттерны Функционального Программирования и примеры использования

Функциональное программирование (ФП) фокусируется на использовании чистых функций, неизменяемых данных и функциональных абстракций.

##### Чистые Функции (Pure Functions)

Функции, которые не имеют побочных эффектов и возвращают одинаковый результат для одинаковых входных данных.

```javascript
// Чистая функция
function add(a, b) {
    return a + b;
}

// Нечистая функция
let total = 0;
function addAndUpdate(a, b) {
    total = a + b;
    return total;
}
```

Легко тестируются, предсказуемы и безопасны для использования в параллельных вычислениях.

##### Функции Высшего Порядка (Higher-Order Functions)

Функции, которые принимают другие функции в качестве аргументов или возвращают функции.

```javascript
// Функция высшего порядка для фильтрации массива
const numbers = [1, 2, 3, 4, 5];

const isEven = (num) => num % 2 === 0;

const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers); // [2, 4]
```

##### Каррирование (Currying)

Преобразование функции с множеством аргументов в цепочку функций, каждая из которых принимает один аргумент.

```javascript
// Без каррирования
function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 3)); // 6

// С каррированием
function multiplyCurried(a) {
    return function(b) {
        return a * b;
    };
}

const double = multiplyCurried(2);
console.log(double(3)); // 6
```

Повышает переиспользуемость кода и позволяет частично применять функции.

##### Композиция Функций (Function Composition)

Объединение нескольких функций в одну, где вывод одной функции становится вводом для следующей.

```javascript
const compose = (f, g) => (x) => f(g(x));

const toUpperCase = (str) => str.toUpperCase();
const exclaim = (str) => `${str}!`;

const shout = compose(exclaim, toUpperCase);

console.log(shout('hello')); // "HELLO!"
```

Улучшает модульность и позволяет строить сложные операции из простых компонентов.

##### Неизменяемость (Immutability)

Избегание изменения исходных данных, вместо этого создаются новые структуры данных с изменениями.

```javascript
const user = {
    name: 'Alice',
    age: 25
};

// Изменяемый подход
user.age = 26;

// Неизменяемый подход
const updatedUser = { ...user, age: 26 };

console.log(user.age); // 25
console.log(updatedUser.age); // 26
```

Предотвращает непреднамеренные побочные эффекты, облегчает отладку и работу с состоянием.

##### (Recursion)

Функция вызывает сама себя для решения более простых подзадач.

```javascript
// Факториал с использованием рекурсии
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
```

Позволяет решать задачи, естественно выраженные рекурсивно, такие как обход деревьев или обработка вложенных структур.

##### Мемоизация (Memoization)

Кэширование результатов функции для оптимизации производительности при повторных вызовах с одинаковыми аргументами.

```javascript
function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

const slowFunction = (num) => {
    // Имитация долгой операции
    for (let i = 0; i < 1e9; i++);
    return num * num;
};

const fastFunction = memoize(slowFunction);

console.log(fastFunction(5)); // Первый вызов: медленный
console.log(fastFunction(5)); // Второй вызов: быстрый
```

Улучшает производительность функций с высокими затратами на вычисления при повторных вызовах с теми же аргументами.
