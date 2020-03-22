// How to use prototype for Array.

const arr = [1, 2, 3, 4, 5];

function addValue(arr, x) {
    let array = [];

    arr.forEach(element => {
        array.push(element + x);
    });
    
    return array;
}

console.log(addValue(arr, 5));

Array.prototype.addValue = function(x) {
    return arr.map(function(i) {
        return i + x;
    });
}

console.log(arr.addValue(5));



// How to use closure.

function getFullName(secondName) {
    return function(firstName, middleName) {
        return `Fullname: ${firstName} ${secondName} ${middleName}`;
    }
}

const fullName = getFullName("Second");

console.log(fullName("One", "Two"));
console.log(fullName("Three", "Four"));



// How to use setTimeout.

console.log("First");

function someFunc() {
    console.log("Second");
}

setTimeout(someFunc, 0);

console.log("Third");



// How to use Promise.all.

const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms);
    });
}

Promise.all([sleep(1000), sleep(2000), sleep(3000)])
    .then(() => console.log("Complete all!"));

Promise.race([sleep(1000), sleep(2000), sleep(3000)])
    .then(() => console.log("Complete race!"));



// How to use Promise form API.

function getData(url, data) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = function() {
            if (xhr.status === 200) {
                let json = JSON.stringify(xhr.response);
                resolve(json);
            }
            reject(xhr.response);
        }
        xhr.onerror = function() {
            reject(error);
        }
        xhr.send();
    })
}

getData("http://jsonplaceholder.typicode.com/posts")
    .then(data => console.log(data))
    .catch(error => console.error(error));



// How to use class on components.

class Component {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }

    hide() {
        this.element.style.display = "none";
    }

    show() {
        this.element.style.display = "block";
    }
}

class GreenBox extends Component {
    constructor(options) {
        super(options.selector);

        this.element.style.width = options.sizeWidth + "px";
        this.element.style.height = options.sizeHeight + "px";
        this.element.style.background = options.color;
    }
}

const greenBox = {
    selector: "#box",
    sizeWidth: 200,
    sizeHeight: 100,
    color: "green"
}

const box = new GreenBox(greenBox);

const redCircle = {
    selector: "#circle",
    sizeWidth: 100,
    sizeHeight: 100,
    borderRadius: "50%",
    color: "red"
}

class RedCircle extends GreenBox {
    constructor(options) {
        super(options);

        this.element.style.borderRadius = options.borderRadius;
    }
}

const circle = new RedCircle(redCircle);
