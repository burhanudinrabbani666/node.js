const http = require("http");

http
  .createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/") {
      res.write("<html>");
      res.write("<head><title>Challenge</title></head>");
      res.write(
        `<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form></body>`
      );
      res.write("</html>");
      return res.end();
    }

    if (url === "/create-user") {
      const body = [];
      req.on("data", (chunk) => {
        body.push(chunk);
      });

      req.on("end", () => {
        const parsedBody = Buffer.concat(body).toString();
        console.log(parsedBody.split("=")[1]);
      });

      res.statusCode = 302;
      res.setHeader("Location", "/");
      res.end();
    }

    if (url === "/users") {
      res.write("<html>");
      res.write("<head><title>Challenge</title></head>");
      res.write("<body>");
      res.write("<ul><li>Users 1</li></ul>");
      res.write("</body>");
      res.write("</html>");
      return res.end();
    }
  })
  .listen(3000);
