const net = require('net');
let client = [];
let list = [];
const server = net.createServer((socket) => {
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
server.listen({
    host: 'localhost',
    port: 3000,
}, () => {
    console.log('opened server on', server.address());
})