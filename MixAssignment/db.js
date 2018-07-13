const fs = require('fs')

exports.initDatabse = (cb) => {
    fs.stat('db', function(err, stats) {
        if (err) {
            fs.writeFile('db', '', function(err) {
                if (err) throw err;
                console.log('Database created....!');
                cb();
            });

            return console.error(err);
        }
        console.log(stats);
        console.log("Got file info successfully!");
        cb();
    });
}
var os = require("os");

exports.registerUser = (regObj, cb) => {
    let storeObj = {
        username: regObj.user,
        pass: regObj.pass,
        date: new Date().toJSON()
    }
    let some = JSON.stringify(storeObj);
    let store = some + os.EOL;
    console.log(store.indexOf(os.EOL))
    fs.open('db', 'a', 666, function(e, id) {
        fs.write(id, store, null, 'utf8', () => {
            fs.close(id, function() {
                console.log('file is updated');
                cb({ status: 200 })
            });
        })
    })
}

exports.loginUser = (logObj, cb) => {
    const data = fs.readFile('./db', (ee, xx) => {
            console.log(xx.toString());
            let one = xx.toString();
            // let two = one.replace(`${/os.EOL/g}`, ',')
            let two = one.replace(/(?:\r\n|\r|\n)/g, ',');

            let three = ("[" + two.slice(0, -1) + "]").trim()

            let four = JSON.parse(three)
            console.log("Username : ", four[0].username);
            console.log(three.indexOf(os.EOL))
                // let xcz = xx.toString().trim();
                // user = JSON.parse(three)
                // console.log(user)
        })
        /* const src = fs.createReadStream('./db', { encoding: 'utf8' });
    let found = false;
    src.on('open', (a) => {
        // console.log(a)
    })

    src.on('data', (chunk) => {
        console.log(typeof chunk.toString('utf8'));
        let user = chunk.toString();
        if (typeof user == 'string' && user.indexOf('{') != -1) {
            console.log("Haha", user)
            console.log("I am", typeof user)
            xcz = "'" + user + "'";
            console.log("xcz", xcz)
            user = JSON.parse(xcz)

            if (logObj.user == user.user && logObj.pass == user.pass) {
                console.log("Authorised");
                found = true;
            }
        }
    });
    src.on('end', () => {
        console.log('File reading completed');
        if (found) {
            cb(200)
        } else {
            cb(401)
        }
    })
 */
}

/* exports.initDatabse(() => {
    exports.registerUser({ user: 'samsunsg', pass: 123 }, () => {
        exports.loginUser({ user: 'sohan', pass: 123 }, () => {

        })
    })

}) */