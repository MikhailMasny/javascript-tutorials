// This is simple object.
const someObject = {
    prop1: "Property One",
    prop2: 1
}

// This is proxy object.
const objectProxy = new Proxy(someObject, {
    get (target, prop) {
        console.log(`Target is ${target}`);
        console.log(`Prop is ${prop}`);
        return target[prop];
    },
    set (target, prop, value) {
        if (prop in target) {
            target[prop] = value;
        } else {
            throw new Error("Bad prop.");
        }
    },
    has (target, prop) {
        return ["prop1", "prop2"].includes(prop);
    },
    deleteProperty(target, prop) {
        delete target[prop];
        return true;
    }
});

// This is simple function.
// const someFunc = text => console.log(text);
const someFunc = function(text) {
    console.log(text);
}

// This is proxy function.
const funcProxy = new Proxy(someFunc, {
    apply(target, thisArg, args) {
        console.log(`Target is: ${target}`);
        console.log(`This arg is: ${thisArg}`);
        console.log(`Args is: ${args}`);

        return target.apply(thisArg, args).toUpperCase();
    }
});

// This is simple class.
class SomeClass {
    constructor(prop1, prop2) {
        this.prop1 = prop1;
        this.prop2 = prop2;
    }
}

// This is proxy class.
const ClassProxy = new Proxy(SomeClass, {
    construct(target, args) {
        return new Proxy(new target(...args), {
            get (t, prop) {
                console.log(prop);
                return t[prop];
            }
        })
    }
});

const proxy = new ClassProxy("Some property", 123);
