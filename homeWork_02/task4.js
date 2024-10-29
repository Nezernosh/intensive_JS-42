/*
Функция structuredClone() создает глубокий клон заданного значения, используя алгоритм "structured clone".
Она может клонировать сложные типы данных, такие как массивы, объекты, Map, Set, Date, RegExp и даже обрабатывать циклические ссылки (серии ссылок) без ошибок.
Однако она не клонирует функции, WeakMap, WeakSet или цепочки прототипов. А также свойства с неперечисляемыми дескрипторами.
*/

const original = { a: 1, b: { c: 2 } };
const clone = structuredClone(original);

console.log(clone);

clone.b.c = 3;

console.log(original.b.c); // 2
console.log(clone.b.c);    // 3
