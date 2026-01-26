import WebSocket, { WebSocketServer } from "ws";
import http from "http";
const server = http.createServer((req, res) => {
    console.log(new Date(), 'Received request for ' + req.url);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
});
const wss = new WebSocketServer({ server });
let userCount = 0;
wss.on('connection', (ws) => {
    ws.on('error', console.error);
    ws.on('message', (data, isBinary) => {
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data, { binary: isBinary });
            }
        });
    });
    console.log("User count: " + ++userCount);
    ws.send("Message from server 1");
});
server.listen(8080, () => {
    console.log(new Date(), 'Server is listening on port 8080');
});
//# sourceMappingURL=index.js.map