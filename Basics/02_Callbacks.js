'use strict'
let x = (A, B) => {
    console.log("I am X....");
    console.log("I got something here...", A);
    console.log("I got something here too...", B);
};

let y = function() {
    console.log("I am Y....");
}

function iWillCallACallback(iCB) {
    let iAmParam1 = "";
    let iAmParam2 = {
        some: "thing"
    }
    iCB(iAmParam1, iAmParam2);
}

iWillCallACallback(x);

setTimeout(() => {
    console.log("I will be here after a 5 seconds...");
}, 5000)

setTimeout(function haha() {
    console.log("I will be here after a 3 seconds...");
}, 3000)