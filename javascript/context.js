// This is some function.
function someFunction() {
    console.log("Some function.", this);
}

// This is some object.
let someObject = {
    name: "someObject",
    propOne: "Property One",
    propTwo: 1,
    funcOne: someFunction,
    funcOneWindowOne: someFunction.bind(window),
    funcOneWindowTwo: someFunction.bind(this),
    logFunc: function() {
        console.group(`${this.name} log.`)
        console.log(`PropOne: ${this.propOne}`);
        console.log(`PropTwo: ${this.propTwo}`);
        console.groupEnd();
    },
    withParamsFunc: function(firstParam, secondParam) {
        console.group(`${this.name} log.`)
        console.log(`First param: ${firstParam}`);
        console.log(`Second param: ${secondParam}`);
        console.groupEnd();
    }
}

// This is another object.
let anotherObject = {
    name: "anotherObject",
    propOne: "Property Two",
    propTwo: 2
}

// This method (bind) call function in some context.
const fnAnotherObjectLog = someObject.logFunc.bind(anotherObject);
const fnAnotherObjectWithParams = someObject.withParamsFunc.bind(anotherObject);

fnAnotherObjectLog();
fnAnotherObjectWithParams("p1", "p2");
someObject.withParamsFunc.bind(anotherObject, "p1", "p2")();

// This method (call) immediately calls function.
someObject.withParamsFunc.call(anotherObject, "p1", "p2");

// This method (apply) immediately calls function, but have only two params.
someObject.withParamsFunc.apply(anotherObject, ["p1", "p2"]);
