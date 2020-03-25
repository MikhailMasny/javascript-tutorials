// This is simple way to create object.
let firstObject = {
    propOne: "Property One",
    propTwo: 1,
    funcOne: function() {
        console.log("This is function of firstObject.");
    }
}

// This is second way to create object.
let secondObject = new Object({
    propOne: "Property Two",
    propTwo: 2,
    funcOne: function() {
        console.log("This is function of secondObject.");
    }
});

// This is someFunc in Object prototype.
Object.prototype.someFunc = function() {
    console.log("This is function of prototype.");
}

// This is new object with prototype by firstObject.
let cloneObject = Object.create(firstObject);

// This is new string.
let someString = new String("Some text");
