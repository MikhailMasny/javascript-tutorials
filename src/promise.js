function somePromise(someObject) {
    console.log("Start work with promise..");

    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            let random = Math.random();
            if (random > 0.3) {
                someObject.prop2 = 11;
                resolve(someObject);
            }
            reject("Some error.");
        }, 1000);
    });

    return promise;
}

function firstFunc(someObject) {
    console.log("First function.");
    console.log(someObject);
    someObject.prop3 = "This is first func prop.";
    return new Promise((resolve, reject) => {
        resolve(someObject)
    });
}

function secondFunc(someObject) {
    console.log("Second function.");
    console.log(someObject);
    return Promise.resolve({ propNew: 111 })
}

function thirdFunc(someObject) {
    console.log("Third function.");
    console.log(someObject);
    return new Promise((resolve, reject) => {
        reject("Third func error.");
    });
}

function finallyFunc() {
    console.log("End work with promise.")
}

const testObject = {
    prop1: "Property one",
    prop2: 1
}

somePromise(testObject)
    .then(firstFunc)
    .then(secondFunc)
    .then(thirdFunc)
    .catch(error => console.error(error))
    .finally(finallyFunc);
