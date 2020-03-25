function createSomeCalcFunction(x) {
    return function() {
        console.log(1 + x);
    }
}

const someFunc = createSomeCalcFunction(1);
someFunc();