'use strict'
let x = (A, B) => {
    // try {


    console.log("I am X....");
    console.log("I got something here...", A);
    throw 'something'
    console.log("I got something here too...", B);
    // } catch (e) {
    // console.trace("I am in x", e);
    // }
};

let y = function() {
    console.log("I am Y....");
}

function iWillCallACallback(iCB) {
    let iAmParam1 = "";
    let iAmParam2 = {
        some: "thing"
    }
    try {

        console.log("In iWillCallACallback..");

    } catch (e) {
        console.trace("I am in iWillCallACallback", e)
    }

    iCB(iAmParam1, iAmParam2);

    x(iAmParam1, iAmParam2);
}
iWillCallACallback(x);


// setTimeout(() => {
//     console.log("I will be here after a 5 seconds...");
// }, 5000)

// setTimeout(function haha() {
//     console.log("I will be here after a 3 seconds...");
// }, 3000)