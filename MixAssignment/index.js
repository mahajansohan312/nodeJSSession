const osReq = require('./OSValidation');
const justAnother = require('./justanother.js')
const routes = require('./processRoutes')
const db = require('./db.js')
var http = require('http');
var url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const createServer = () => {
    const net = require('net');
    let client = [];
    let list = [];
    const serverTCP = net.createServer((socket) => {
        socket.write('Echo server\r\n');
        console.log(socket.remoteAddress)
        console.log(socket.remotePort)
        let name = "clinet:" + socket.remotePort
        client.push(socket);
        list.push(name);
        socket.on('data', (datqa) => {
            console.log(datqa.toString());
            broadcast(socket, "hello client")
        })
        broadcast = (sender, message) => {
                client.forEach(function(receiver) {
                    if (sender === receiver) {

                    } else {
                        receiver.write(message);
                    }

                })
            }
            // socket.end('goodbye\n');
    }).on('error', (err) => {
        // handle errors here
        throw err;
    });


    // grab an arbitrary unused port.
    serverTCP.listen({
        host: 'localhost',
        port: 3001,
    }, () => {
        console.log('opened server on', server.address());
    })



    const server = http.createServer(function(req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        // console.log(url.parse(req.url, true))
        let request = url.parse(req.url, true);
        var q = url.parse(req.url, true).query;
        // console.log(typeof request);
        // console.log(Object.keys(request))
        // console.log(request.pathname)
        switch (request.pathname) {
            case '/login':
                routes.routeForLogin(q, (iLog) => {
                    console.log("in Index.js @ /login : ", iLog)
                    let ret = iLog;
                    ret.tcpPort = 3001;
                    var txt = JSON.stringify(ret);
                    res.end(txt);
                });
                break;
            case '/register':
                routes.routeForRegister(q);
                break;
            default:

                var txt = JSON.stringify(q);
                res.end(txt);
                break;
        }

        // var txt = q.year + " " + q.month;
        // res.end(txt);
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