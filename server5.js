const http = require("http");


const port = 5000;
http
    .createServer((req, res) => {
        let data = "my name is davra  man5";
        console.log("server  started");
        res.write("hello world");
        res.write(data);
        res.end();
    })
    .listen(port);