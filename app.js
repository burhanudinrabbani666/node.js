// Create an Sever
// 📔 Tips: Name the file according to what is imported
const http = require("http"); // global module

// req: http.IncomingMessage,
// res: http.ServerResponse<http.IncomingMessage>
const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(3000);
