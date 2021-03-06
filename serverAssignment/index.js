const osReq = require('./OSValidation');
const justAnother = require('./justanother.js')
const routes = require('./processRoutes')
const db = require('./db.js')
var http = require('http');
var url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const createServer = () => {
    const server = http.createServer(function(req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        console.log(url.parse(req.url, true))
        let request = url.parse(req.url, true);
        var q = url.parse(req.url, true).query;
        console.log(typeof request);
        console.log(Object.keys(request))
        console.log(request.pathname)
        switch (request.pathname) {
            case '/login':
                routes.routeForLogin(q);
                break;
            case '/register':
                routes.routeForRegister(q);
                break;
            default:

                var txt = JSON.stringify(q);
                res.end(txt);
                break;
        }
        var q = url.parse(req.url, true).query;
        var txt = q.year + " " + q.month;
        res.end(txt);
    })

    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
}

osReq.validation((iArg) => {
    console.log(iArg)
    if (iArg.status) {
        console.log("just Another");
        console.log(justAnother())
        createServer();
    } else {
        console.log("No just Another");
    }
})