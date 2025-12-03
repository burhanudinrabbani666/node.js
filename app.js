// Create an Sever
// 📔 Tips: Name the file according to what is imported
const http = require("http"); // global module
const routes = require("./routes"); // import files

const server = http.createServer(routes.handler);

server.listen(3000);
