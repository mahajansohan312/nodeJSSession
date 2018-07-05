const firstVariable = 1;
let secondVariable = 2;
var fourthVariable = 4;

function functionOne() {
    thirdVariable = "Three";

    console.log("firstVariable" + firstVariable);
    console.log("secondVariable" + secondVariable);
    // console.log(this);
};
functionOne();
console.log("thirdVariable" + thirdVariable);
/*setTimeout(() => {
    console.log("thirdVariable" + thirdVariable);
}, 50000)*/

// console.log(this);
let elements = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
];

elements.map(function(element) {
    return element.length;
}); // [8, 6, 7, 9]

// console.log(elements);

elements.map(element => {
    return element.length;
}); // [8, 6, 7, 9]

// console.log(elements);

elements.map(({ length }) => length); // [8, 6, 7, 9]

// console.log(elements);