const db = require('./db.js');

exports.routeForLogin = (loginObj) => {
    console.log(loginObj);
    db.loginUser(loginObj, (iLoggedIn) => {
        console.log(iLoggedIn);
    })
}

exports.routeForRegister = (regObj) => {
    console.log(regObj);
    db.registerUser(regObj, (iRegistered) => {
        console.log(iRegistered);
    })
}