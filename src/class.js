// This is some class.
class SomeClass {
    constructor(someOptions) {
        this.prop1 = someOptions.prop1;
        this.prop2 = someOptions.prop2;
        this.prop3 = someOptions.prop3;
    }

    someFunc() {
        console.log("This is some func of some class");
    }

    static type = "SOME_CLASS";
}

// This is some extend class by some class.
class SomeExtendClass extends SomeClass {
    constructor(someOptions) {
        super(someOptions);
        this.prop4 = someOptions.prop4;
    }

    someFunc() {
        super.someFunc();
        console.log("Some text");
    }

    anotherFunc() {
        console.log("This is some func of some extend class");
        console.log(`This is prop4: ${this.prop4}`);
    }

    static type = "SOME_EXTEND_CLASS";

    get prop2Calc() {
        return this.prop2 + 100;
    }

    set prop2Calc(value) {
        this.prop2 = value;
    }
}

// This is some object.
const someObject = {
    prop1: "Property One",
    prop2: 1,
    prop3: function() {
        console.log(this.prop1);
    }
}

// This is some object to extend class.
const someExtendObject = {
    prop1: "Property Two",
    prop2: 2,
    prop3: function() {
        console.log(this.prop1);
    },
    prop4: "New property"
}

const someClass = new SomeClass(someObject);
console.log(someClass);
someClass.someFunc();
console.log(SomeClass.type);

const someExtendClass = new SomeExtendClass(someExtendObject);
console.log(someExtendClass);
someExtendClass.someFunc();
someExtendClass.anotherFunc();
console.log(someExtendClass.prop2Calc);
someExtendClass.prop2 = 11;
console.log(someExtendClass.prop2Calc);
console.log(SomeExtendClass.type);
