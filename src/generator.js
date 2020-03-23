// To call generator: *.next()

// This is simple generator.
function* stringGenerator() {
    yield "T";
    yield "e";
    yield "x";
    yield "t";
}

const str = stringGenerator();

// This is generator with params.
function* cycleGenerator(array) {
    for (let index = 0; index < array.length; index++) {
        yield array[index];
    }
}

const someArray = [1, 2, 3, 4, 5];
const cycle = cycleGenerator(someArray);

// This is simple for..*

function* someIterator(n = 10) {
    for (let index = 0; index < n; index++) {
        yield index;
    }
}

for (const iterator of someIterator(6)) {
    console.log(iterator);
}
