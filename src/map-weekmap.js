// Map
const someObject = {
    prop1: "Property One",
    prop2: 1
}

const entries = [
    ["prop1", "Property Two"],
    ["prop2", 2]
]

console.log(Object.entries(someObject));
console.log(Object.fromEntries(entries));

const map = new Map(entries);
console.log(map);
console.log(map.get("prop2")); // console.log(someObject.prop2);

map.set("newProp", 3)
   .set(NaN, "Not a Number");

console.log(map.get(NaN));
console.log(map.has(NaN));
console.log(map.size);
// map.clear();
// console.log(map.size);

for (const [key, value] of map) {
    console.log(key, value);
}

for (const val of map.values()) {
    console.log(val);
}

for (const key of map.keys()) {
    console.log(key);
}

map.forEach((val, key, item) => {
    console.log(val, key);
});

// WeakMap
let weekObject = {
    prop1: "Property One",
    prop2: 1
}

// const array = [weekObject];
// weekObject = null;

// console.log(weekObject);

const weekMap = new WeakMap([
    [weekObject, "Week object"] 
]);

weekObject = null;

console.log(weekMap.get(weekObject));
