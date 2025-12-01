const http = require("http"); // import Http

const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(3000);
