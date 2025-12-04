// Create an Sever
// 📔 Tips: Name the file according to what is imported
const http = require("http"); // global module
const express = require("express");
const app = express();

app.use((req, res, next) => {
  // next is function
  console.log("In the middleware");

  next(); // for allowing move to next middleware
}); // add new middleware function

app.use((req, res, next) => {
  // next is function
  console.log("Hello World");
}); // add new middleware function

const server = http.createServer(app);
server.listen(3000);
