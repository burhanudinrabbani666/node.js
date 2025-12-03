// Create an Sever
// 📔 Tips: Name the file according to what is imported
const http = require("http"); // global module

// req: http.IncomingMessage,
// res: http.ServerResponse<http.IncomingMessage>
const server = http.createServer((req, res) => {
  console.log(req.url, "-------", req.method, req.headers);
});

server.listen(3000);

//expected
// get location url: '/' or etc
// -----
// GET
// data headers headers
