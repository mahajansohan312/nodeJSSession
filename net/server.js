const net = require('net');

const server = net.createServer((socket) => {
    socket.write('Echo server\r\n');
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
});