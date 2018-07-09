const osReq = require('./OSValidation');
const justAnother = require('./justanother.js')

osReq.validation((iArg) => {
    console.log(iArg)
    if (iArg.status) {
        console.log("just Another");
        console.log(justAnother())
    } else {
        console.log("No just Another");
    }
})