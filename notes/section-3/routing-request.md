## Routing Request

[GET vs POST](https://www.geeksforgeeks.org/php/difference-between-http-get-and-post-methods/#http-get)

1. Method="GET"

The HTTP GET method requests data from a server without altering its state. It appends parameters to the URL, making it suitable for retrieving non-sensitive data. Commonly used for viewing content, GET is ideal for requests that don't involve data modification.

2. Method="POST"

The HTTP POST method sends data from the client to the server to create or update resources, storing data in the request body. It's suitable for secure data transfer, like images or documents, with security relying on encryption (HTTPS), authentication, and validation.

```js
const server = http.createServer((req, res) => {
  const url = req.url; // store url

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

  // Sending respons from server
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello From Node.js Server</h1></body>");
  res.write("</html>");
  res.end(); // end the respons
});

server.listen(3000);
```
