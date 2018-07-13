const Square = require('./03_requireAndImport_03');

const mySquare = new Square(2);
mySquare.on('event', (data) => {
    console.log("something happened", data)
})

mySquare.emit('event', { test: 1 })
    // console.log(mySquare);`