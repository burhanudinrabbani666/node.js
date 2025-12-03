## Creating Node JS

Core Modules

1. http ---> Launch a server, send request.
2. https ---> Launch a SSL server.
3. fs ---> Launch a file system
4. path ---> Launch a
5. os ---> Launch a

### The Built-in HTTP Module

1. [NodeJS: Ecma Script using require](https://nodejs.org/api/modules.html#loading-ecmascript-modules-using-require)
2. [Geek: NodeJS http module](https://www.geeksforgeeks.org/node-js/node-js-http-module/)

In NodeJS, the HTTP module is a core built-in module that enables developers to create and manage HTTP servers. It plays a crucial role in handling server-side HTTP requests and responses, allowing for seamless communication between clients and servers.

- Create HTTP servers to handle requests and send responses
- Make HTTP requests to other servers
- Handle different HTTP methods (GET, POST, PUT, DELETE, etc.)
- Work with request and response headers
- Handle streaming data for large payloads

Including the HTTP Module

To use the HTTP module, include it in your application using the require() method:

```js
const http = require("http"); // import Http

const server = http.createServer((req, res) => {
  console.log(req);
});

server.listen(3000);
```

```js
function createServer<typeof http.IncomingMessage, typeof http.ServerResponse>(requestListener?: http.RequestListener<typeof http.IncomingMessage, typeof http.ServerResponse> | undefined): http.Server<typeof http.IncomingMessage, typeof http.ServerResponse> (+1 overload)
```

**requestListener:** function that will execute for every incoming **request**.
