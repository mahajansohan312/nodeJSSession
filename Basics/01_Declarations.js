const firstVariable = 1;
let secondVariable = 2;
var fourthVariable = 4;
var thirdVariable = "teststststst";

console.log("Global test of firstVariable :",global.firstVariable);
console.log("Global test of secondVariable :",global.secondVariable);
console.log("Global test of fourthVariable :",global.fourthVariable);
console.log("Global test of thirdVariable :",global.thirdVariable);


function functionOne() {
    thirdVariable = "Three";

    console.log("firstVariable" + firstVariable);
    console.log("secondVariable" + secondVariable);
    // console.log(this);
    return "hi"
};

function varTest() {
    var x = 1;
    if (true) {
      var x = 2;  // same variable!
      console.log(x);  // 2
    }
    console.log(x);  // 2
  }
  varTest();
  function letTest() {
    let x = 1;
    if (true) {
      let x = 2;  // different variable
      console.log(x);  // 2
    }
    console.log(x);  // 1
  }
  letTest();
  

setTimeout(() => {
    let x = functionOne();
    console.log("Return from fun one - ", x)
}, 5000)

console.log("thirdVariable" + thirdVariable);

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