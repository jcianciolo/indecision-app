// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
};
console.log(add(55, 1, 1001));
// this keyword - no longer bound

const user = {
    name: 'John',
    cities: ['Redwood City', 'Santa Cruz', 'Berkeley'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 3,
    multiply () {
        return this.numbers.map((multiplied) => multiplied * this.multiplyBy);
    }
};

console.log(multiplier.multiply());