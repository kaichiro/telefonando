const http = require("http");

const port = 4001;

http.createServer((req, res) => {
    res.write(`server1 working at http://localhost:${port}`);
    res.end();
}).listen(port);
