## Sending Respons

[MDN: HTTP Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers)

```js
const server = http.createServer((req, res) => {
  // Sending respons from server
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello From Node.js Server</h1></body>");
  res.write("</html>");

  res.end(); // end the respons
});
```
