const http = require("http"); // import Http

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>"); // write with single quote
    return res.end();
  }

  console.log(req.url, req.method, req.headers);
  // process.exit(); // Just use CTRL + C

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello World from My NodeJS Server</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
