const x = require('./test1/03_requireAndImport_01');
const os = require('os');
console.log(os)
    // console.log(x.a);

const Square = require('./03_requireAndImport_03');

const mySquare = new Square(2);
// console.log(mySquare);

let myObj = {
        width: 1,
        area: function() {
            console.log(this)
            return this.width * this.width;
        }
    }
    // console.log(`The area of mySquare is ${mySquare.area()}`);

// console.log(`The area of myObj is ${myObj.area()}`);

const myTestModule = require('./test-module');

console.log("myTestModule...", myTestModule)