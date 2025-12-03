## Understanding Request

```js
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // process.exit(); // Just use CTRL + C
});
server.listen(3000);

//expected
// get location url: '/' or etc
// -----
// GET
// data headers headers
```
