## Node.js Program Lifecycle

node app.js
--> Start Script
--> Parse Code, register variable & Functions
--> (♻️ Event Loop (Node Application))
==> Keeps on running long as there are event listeners registered.
==> process.exit() to stop program

> process.exit() is hard code for close the node application.
> Just use ctrl + c in terminal for close node application.

```js
const server = http.createServer((req, res) => {
  console.log(req);
  // process.exit();
});
```
