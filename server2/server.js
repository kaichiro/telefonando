const http = require("http");

const port = 4002;

http.createServer((req, res) => {
    res.write(`server2 working at http://localhost:${port}`);
    res.end();
}).listen(port);
