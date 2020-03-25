// This is example of closure by first function.
function createSomeCalcFunction(x) {
    return function() {
        console.log(1 + x);
    }
}

const someFunc = createSomeCalcFunction(1);
someFunc();

// This is example of closure by both functions.
function createAnotherCalcFunction(n) {
    return function(num) {
        console.log(1 + n + num);
    }
}

const anotherFunc = createAnotherCalcFunction(1);
anotherFunc(1);
