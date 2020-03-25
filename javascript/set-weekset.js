// Set
const set = new Set([1, 1, 1, 2, 2, 3, 4, 4, 5, 5, 5]);
console.log(set);

set.add(1).add(11).add(111);
console.log(set.has(7));
console.log(set.size);
console.log(set.delete(1));
// console.log(set.clear());

console.log(set.values());
console.log(set.keys());
console.log(set.entries());

// WeekSet
const someObjects = [
    { prop1: 1 },
    { prop1: 2 },
    { prop1: 3 }
]

const weekSet = new WeakSet();

weekSet.add(someObjects[0]).add(someObjects[1]).add(someObjects[2]);

someObjects.splice(1, 1);

console.log(weekSet.has(someObjects[2]));
