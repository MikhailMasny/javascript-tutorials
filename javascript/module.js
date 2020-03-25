// This is export of variable.
export let one = 1;

// This is export of variables.
let two = 2;
let three = 3;
export { two, three }

// This is export of class.
export class SomeClass {
    constructor(someProp) {
        this.someProp = someProp;
    }
}

// This is export of class.
export function someFunc() {
    console.log("Some text");
}

// This is export of class or function in the end of file.
// export { SomeClass, someFunc }
// export { SomeClass as MyClass, someFunc as myFunc }

// This is import of class or function in the end of file.
// import { SomeClass, someFunc } from "./file.js"
// import { SomeClass as MyClass, someFunc as myFunc } from "./file.js"
// import * as SomeObjects from "./file.js"

// This is export of default class.
export default class NewClass {
    constructor(someProp) {
        this.someProp = someProp;
    }
}

// This is import of default class.
// import NewClass from "./file.js";
