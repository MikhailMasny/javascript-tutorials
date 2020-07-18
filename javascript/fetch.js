const requestURL = "http://jsonplaceholder.typicode.com/users";

function sendRequest(method, url, body = null) {
    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" }
    }).then(response => {
        if (response.ok) {
            return response.json();
        }

        return response.json().then(error => {
            const someError = new Error("Some error..");
            someError.data = error;
        });
    });
}

// sendRequest("GET", requestURL)
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

const someObject = {
    prop1: "One",
    prop2: 1
}

sendRequest("POST", requestURL, someObject)
    .then(data => console.log(data))
    .catch(error => console.error(error))



async function sendRequestAsync(model, url) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(model)
    });
    const data = await response.json();
    return data;
}

async function fetchRequest() {
    const model = {
        prop: "value",
    }
    const result = await sendRequestAsync(model, url);
}
