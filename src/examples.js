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
