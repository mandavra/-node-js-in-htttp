
const http = require("http");


const port = 3000;
http
    .createServer((req, res) => {
        let data = "my name is davra  man3";
        console.log("server  started");
        res.write("hello world");
        res.write(data);
        res.end();
    })
    .listen(port);