const someValue = 123;

localStorage.removeItem("number");
console.log(`Number: ${localStorage.getItem("number")}`);
localStorage.setItem("number", someValue.toString());
console.log(`Number: ${localStorage.getItem("number")}`);
localStorage.clear();

const someObject = {
    prop1: "Property One.",
    prop2: 1
}

localStorage.setItem("someObject", JSON.stringify(someObject));
const localStorageObject = localStorage.getItem("someObject");
console.log(`someObject is ${typeof localStorageObject}`);
const object = JSON.parse(localStorageObject);
console.log(object);



// windows.onstorage = () => {}
window.addEventListener("storage", event => {
    console.log(event);
});
