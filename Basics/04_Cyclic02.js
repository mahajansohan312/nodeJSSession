//lets name this file as A
console.log('a starting');
exports.done = false;
const b = require('./04_Cyclic03');
console.log('in a, b.done = %j', b.done);
exports.done = true;
console.log('a done');