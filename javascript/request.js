const requestURL = "http://jsonplaceholder.typicode.com/users";

// This is classic XMLHttpRequest.
const xhr = new XMLHttpRequest();
xhr.open("GET", requestURL);
// xhr.responseType = "json"; // Use it if need JSON response.
xhr.onload = () => {
    if (xhr.status >= 400) {
        console.error(xhr.response);
    } else {
        console.log(JSON.parse(xhr.response));
    }
}
xhr.onerror = () => console.error();
xhr.send();

// This is XMLHttpRequest with Promise.
function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = "json"; // Use it if need JSON response.
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(console.error(xhr.response));
            } else {
                resolve(console.log(xhr.response));
            }
        }
        xhr.onerror = () => console.error();
        xhr.send(JSON.stringify(body));
    })
}

sendRequest("GET", requestURL)
    .then(data => console.log(data))
    .catch(error => console.error(error));

const someObject = {
    prop1: "One",
    prop2: 1
}

sendRequest("POST", requestURL, someObject)
    .then(data => console.log(data))
    .catch(error => console.error(error))
