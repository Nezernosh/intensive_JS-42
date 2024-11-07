let promiseTwo = new Promise((resolve, reject) => {
    resolve("a"); // 1 a
});

promiseTwo
    .then((res) => {
        return res + "b"; // 2 ab
    })
    .then((res) => {
        return res + "с"; // 3 abc
    })
    .finally((res) => { // 5 res = abc!!!!!!!
        return res + "!!!!!!!";
    })
    .catch((res) => {
        return res + "d";
    })
    .then((res) => { // 4 выведет abc
        console.log(res);
    });
