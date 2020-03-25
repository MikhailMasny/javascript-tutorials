const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms));
}

const url = "https://jsonplaceholder.typicode.com/todos";

// This is function with class promise.
function fetchByUrl() {
    return delay(3000)
    .then(() => fetch(url))
    .then(response => response.json())
}

fetchByUrl()
    .then(data => {
        console.log(`Data from url: ${data}`);
    })
    .catch(error => console.error(error));


// This is function with async/await.
async function fetchByUrlAsync() {
    try {
        await delay(3000);
        const response = await fetch(url);
        const data = response.json();
        console.log(`Data from url: ${data}`);
    } catch (error) {
        console.error(error);
    } finally {
        console.log("Finally.")
    }
}

fetchByUrlAsync();
