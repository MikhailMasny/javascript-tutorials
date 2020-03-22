// How to use prototype for Array.

const arr = [1, 2, 3, 4, 5];

function addValue(arr, x) {
    let array = [];

    arr.forEach(element => {
        array.push(element + x);
    });
    
    return array;
}

console.log(addValue(arr, 5));

Array.prototype.addValue = function(x) {
    return arr.map(function(i) {
        return i + x;
    });
}

console.log(arr.addValue(5));



// How to use closure.

function getFullName(secondName) {
    return function(firstName, middleName) {
        return `Fullname: ${firstName} ${secondName} ${middleName}`;
    }
}

const fullName = getFullName("Second");

console.log(fullName("One", "Two"));
console.log(fullName("Three", "Four"));
