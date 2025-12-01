## Creating Node JS

Core Modules

1. http ---> Launch a server, send request.
2. https ---> Launch a SSL server.
3. fs ---> Launch a
4. path ---> Launch a
5. os ---> Launch a

```js
const http = require("http"); // import Http

const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(3000);
```
