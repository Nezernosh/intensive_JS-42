// Используя Object.assign()
const counterCopy1 = Object.assign({}, counter1);

// Используя Spread Operator
const counterCopy2 = { ...counter1 };

// Используя JSON (методы не скопируются)
const counterCopy3 = JSON.parse(JSON.stringify(counter1));

// Используя structuredClone() (методы не скопируются)
const counterCopy4 = structuredClone(counter1);

// Используя функцию deepClone
function deepClone(obj) {
    if (obj === null || typeof obj !== 'object') return obj;

    const clonedObj = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        clonedObj[key] = deepClone(obj[key]);
    }

    return clonedObj;
}

const counterCopy5 = deepClone(counter1);

// Для экземпляров класса - создание нового экземпляра
const counterCopy6 = new CounterClass();
counterCopy6.count = counter3.count;

// Используя Object.create() с прототипами
const counterCopy7 = Object.create(Object.getPrototypeOf(counter2));
Object.assign(counterCopy7, counter2);
