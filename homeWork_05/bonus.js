async function fetchUrl(url) {
    let error;
    for (let i = 0; i < 5; i++) {
        try {
            return await fetch(url)
        } catch (err) {
            error = err;
        }
    }
    return error;
}

fetchUrl('https://google.com').then(response => console.log(response)).catch(err => console.error(err));
