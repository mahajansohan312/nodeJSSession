const db = require('./db.js');

exports.routeForLogin = (loginObj, iloginCB) => {
    console.log(loginObj);
    db.loginUser(loginObj, (iLoggedIn) => {
        console.log(iLoggedIn);
        iloginCB(iLoggedIn);
    })
}

exports.routeForRegister = (regObj) => {
    console.log(regObj);
    db.registerUser(regObj, (iRegistered) => {
        console.log(iRegistered);
    })
}