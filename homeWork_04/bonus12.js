const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const total = 13;
//result = [4, 9]

const firstSum = (arr, total) => {
    const numbers = new Set(arr);
    for (let num of arr) {
        const complement = total - num;
        if (numbers.has(complement)) {
            return [num, complement];
        }
    }
    return []; // Если пара не найдена
};

console.log(firstSum(arr, total)); // result = [4, 9]


/*
Алгоритм имеет временную сложность O(n), где n — длина массива arr. Это достигается за счет:

-Однократного прохода по массиву, итерируемся по каждому элементу только один раз.
-Проверка наличия элемента в множестве numbers выполняется за O(1).

Таким образом, общее время выполнения алгоритма пропорционально размеру входного массива.

https://dev.to/arnaud/using-array-prototype-includes-vs-set-prototype-has-to-filter-arrays-41fg
*/
