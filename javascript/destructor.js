function someOperation(a, b) {
    return [
        a + b,
        undefined,
        a - b,
        a / b,
        a * b
    ];
}

const [sum, , , sub = "Some error", ...other] = someOperation(10, 5);
console.log(sum);
console.log(sub);
console.log(other);

const someObject = {
    prop1: "One",
    prop2: 1,
    prop3: {
        prop31: 11,
        prop32: 111
    }
}

const { prop1: firstProp, prop4 = "Some error", prop3: { prop31: secondProp, prop32 } } = someObject;
console.log(firstProp, prop4, secondProp, prop32);
