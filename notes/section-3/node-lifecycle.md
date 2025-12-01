## Node.js Program Lifecycle

node app.js
--> Start Script
--> Parse Code, register variable & Functions
--> (♻️ Event Loop (Node Application))
==> Keeps on running long as there are event listeners registered.
==> process.exit() to stop program

```js
const server = http.createServer((req, res) => {
  console.log(req);
  // process.exit();
});
```
