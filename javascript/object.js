let someProp = {};

let someObject = Object.create({
        someFunc() {
            console.log("Some func from some object.");
        }
    },
    {
    propOne: {
        value: "Property One",
        enumerable: true,
        writable: true,
        configurable: true // delete someObject.propOne
    },
    propTwo: {
        value: 1
    },
    propThree: {
        get() {
            return someProp;
        },
        set(value) {
            someProp = value;
        }
    }
});

for (const key in someObject) {
    if (someObject.hasOwnProperty(key)) {
        const element = someObject[key];
        console.log(element);
    }
}

console.log(someObject);
