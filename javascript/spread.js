const firstArray = [1, 2, 3, 4, 5];
const secondArray = ["1", "2", "3", "4", "5"];

// Spread
console.log(...firstArray);

const thirdArray = [...firstArray];
console.log(...thirdArray);
firstArray[0] = 0;
console.log(...thirdArray);

const fourthArray1 = [...firstArray, 111, ...thirdArray];
const fourthArray2 = [...firstArray, ...thirdArray];
const fourthArray3 = firstArray.concat(thirdArray);
console.log(...fourthArray1);

const firstObject = {
    prop1: "One",
    prop0: 1
}

const secondObject = {
    prop1: "Two",
    prop2: 2
}

console.log({...firstObject}); // Copy object someObject.
console.log({...firstObject, ...secondObject});

// Rest
function someFunc(first, second, ...someArgs) {
    return first + second + someArgs.reduce((a, i) => a + i, 0);
}

const array = [1, 2, 3, 4, 5];
console.log(someFunc(...array));

const [a, b, ...other] = array;
console.log(a, b, other);

const someObject = {
    prop1: "One",
    prop2: 1,
    prop3: 123,
    prop4: 1234,
    prop5: 12345
}

const { prop1, prop2, ...otherProps } = someObject;
console.log(prop1, prop2, otherProps);
