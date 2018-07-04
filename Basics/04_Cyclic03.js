//let's name this file as b
console.log('b starting');
exports.done = false;
const a = require('./04_Cyclic02');
console.log('in b, a.done = %j', a.done);
exports.done = true;
console.log('b done');