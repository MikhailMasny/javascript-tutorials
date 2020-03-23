let symbolOne = Symbol("someSymbol");
console.log(typeof symbolOne);
console.log(symbolOne);

let symbolTwo = Symbol("someSymbol");
console.log(symbolOne === symbolTwo);

let symbolThree = Symbol.for("someSymbol");
let symbolFour = Symbol.for("someSymbol");
console.log(symbolThree === symbolFour);

let symbolName = Symbol.keyFor(symbolOne);
console.log(symbolName);

const someObject = {
    prop1: "Property One",
    prop2: 1,
    [Symbol.for("prop3")]: "Prop11",
    [Symbol.for("prop4")]: "Prop111",
}

console.log(someObject); // Show object.
console.log(someObject[Symbol.for("prop3")]); // Show symbol property.
console.log(Object.getOwnPropertySymbols(someObject)); // Show all symbols props by some object.
