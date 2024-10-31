if (!Function.prototype.myBind) {
    Function.prototype.myBind = function (context, ...args) {
        // Сохраняем ссылку на оригинальную функцию
        const func = this;

        // Возвращаем новую функцию с привязанным контекстом
        return function (...newArgs) {
            // Вызываем оригинальную функцию с контекстом и всеми аргументами
            return func.apply(context, args.concat(newArgs));
        };
    };
}

function greet(greeting, name) {
    console.log(`${greeting}, ${name}! Меня зовут ${this.name}.`);
}

const person = { name: "Анна" };
const greetPerson = greet.myBind(person, "Привет");

greetPerson("Иван"); // "Привет, Иван! Меня зовут Анна."
