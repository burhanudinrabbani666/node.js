// Create an Sever
// 📔 Tips: Name the file according to what is imported
const http = require("http"); // global module
const fs = require("fs");
const { buffer } = require("stream/consumers");

// req: http.IncomingMessage,
// res: http.ServerResponse<http.IncomingMessage>
const server = http.createServer((req, res) => {
  const url = req.url; // store url
  const method = req.method;

  // routing
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      `<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>`
    );
    res.write("</html>");
    return res.end(); // end respons
  }

  // Redirecting Request
  if (url === "/message" && method === "POST") {
    // get data from form
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    //  fired when is done parsing
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1].replaceAll("+", " ");
      fs.writeFileSync("message.txt", message); // store in so this method not in sync
    });

    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  // Sending respons from server
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello From Node.js Server</h1></body>");
  res.write("</html>");
  res.end(); // end the respons
});

server.listen(3000);
