const fs = require("fs");
//
const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  //   // routing
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      `<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send to dev</button></form></body>`
    );
    res.write("</html>");
    return res.end(); // end respons
  }

  //   // Redirecting Request
  if (url === "/message" && method === "POST") {
    // get data from form
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    //     //  fired when is done parsing
    //     // Add retutn in here ❗
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }

  //   // Sending respons from server
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello From Node.js Server</h1></body>");
  res.write("</html>");
  res.end(); // end the respons
};
//
exports.handler = requestHandler;
