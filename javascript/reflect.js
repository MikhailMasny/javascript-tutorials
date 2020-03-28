class FirstClass {
    constructor(firstField) {
        this.firstField = firstField;
    }

    someFunc() {
        console.log(`Some text here: ${this.firstField}`);
    }
}

const firstObject = new FirstClass("12345");
console.log(firstObject.someFunc());

const secondObject = Reflect.construct(FirstClass, ["54321"]);
console.log(secondObject.someFunc());

class SecondClass {
    secondField = "Another text here";
}

const thirdObject = Reflect.construct(FirstClass, ["123"], SecondClass);
console.log(thirdObject.__proto__ === FirstClass.prototype);
console.log(thirdObject.__proto__ === SecondClass.prototype);

Reflect.apply(secondObject.someFunc, { firstField: "000"}, []);
console.log(Reflect.ownKeys(secondObject));

Reflect.preventExtensions(secondObject);
secondObject.newField = "Demo";
console.log(Reflect.isExtensible(secondObject));
console.log(secondObject);
