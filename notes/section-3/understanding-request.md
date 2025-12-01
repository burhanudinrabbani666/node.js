## Understanding Request

```js
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // process.exit(); // Just use CTRL + C

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello World from My NodeJS Server</h1></body>");
  res.write("</html>");
  res.end();
});
```
