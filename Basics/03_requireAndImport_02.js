const x = require('./03_requireAndImport_01');
console.log(x.a);
const Square = require('./03_requireAndImport_03');
const mySquare = new Square(2);
console.log(`The area of mySquare is ${mySquare.area()}`);

const myTestModule = require('./test-module');
console.log("myTestModule...", myTestModule)