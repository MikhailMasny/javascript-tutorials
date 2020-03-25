const array = [
    { prop1: "One", prop2: 1 },
    { prop1: "Two", prop2: 2 },
    { prop1: "Three", prop2: 3 },
    { prop1: "Four", prop2: 4 },
    { prop1: "Five", prop2: 5 }
]

// for (ES5)
console.group("for");

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

console.groupEnd();

// for..of (ES6)
console.group("for..of");

for (const element of array) {
    console.log(element);
}

console.groupEnd();

// forEach
console.group("forEach");

array.forEach(function(element, index, pArr) {
    console.log(element);
    console.log(index);
    console.log(pArr);
    console.log("-----")
})

array.forEach(element => {
    console.log(element);
});

console.groupEnd();

// Map
console.group("Map");

const newArray = array.map(element => {
    return element;
});
console.log(newArray);

const someArray = array.map(element => {
    return `Prop1: ${element.prop1}, prop2: ${element.prop2}`;
});
console.log(someArray);

console.groupEnd();

// Filter
console.group("Filter");

const filteredArray = array.filter(element => element.prop2 >= 3);
console.log(filteredArray);

console.groupEnd();

// Reduce
console.group("Reduce");

const sumArray = array.reduce((total, element) => {
    return total + element.prop2;
}, 0);
console.log(sumArray);

console.groupEnd();

// Find
console.group("Find");

const itemTwo = array.find(element => element.prop1 === "Two");
console.log(itemTwo);

console.groupEnd();

// FindIndex
console.group("FindIndex");

const itemFourIndex = array.findIndex(element => element.prop1 == "Four");
console.log(itemFourIndex);

console.groupEnd();
