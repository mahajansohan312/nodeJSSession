const req = require('request');
const realine = require('readline');
const r1 = realine.createInterface({
    input: process.stdin,
    output: process.stdout
})
r1.question("What is username : ", (username) => {
    console.log(username);
    r1.question("What is password : ", (password) => {
        console.log(password)
        req(`http://localhost:3000/login?user=${username}&pass=${password}`, (err, res, body) => {
            console.log("Error : ", err);
            // console.log("Response : ", res)
            console.log("Body :", body)
        })
    })
})