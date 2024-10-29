const obj1 = { here: { is: "on", other: "3" }, object: "Y" };
const obj2 = { here: { is: "on", other: "2" }, object: "Y" };

const deepEqual = (obj1, obj2) => {
    // Если переменные хранят ссылки на один и тот же объект, то true
    if (obj1 === obj2) return true;

    // Проверим что это действительно объекты и они заданы
    if (
        obj1 === null ||
        typeof obj1 !== 'object' ||
        obj2 === null ||
        typeof obj2 !== 'object'
    ) {
        return false;
    }

    // Получаем ключи обоих объектов
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Проверяем количество ключей в объектах на равенство
    if (keys1.length !== keys2.length) return false;

    // Проверяем на равенство значение каждого ключа
    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
};

console.log(deepEqual(obj1, obj2)); // false
