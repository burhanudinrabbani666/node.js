## Using the Node Modules System

[Geek: Node Export Module](https://www.geeksforgeeks.org/node-js/node-js-export-module/)

In NodeJS, module.exports is used to share functions, objects, or values from one file to the other file so that other files can use them. This is an essential part of organizing and reusing code across different parts of your application, making it easier to manage and maintain.

Here’s how exporting modules in NodeJS can help:

- Share code between files easily.
- Organize projects into smaller files.
- Reuse code without repetition.
- Control access to file contents.

```js
// app.js
// Create an Sever
// 📔 Tips: Name the file according to what is imported
const http = require("http"); // global module
const routes = require("./routes"); // import files

// req: http.IncomingMessage,
// res: http.ServerResponse<http.IncomingMessage>
const server = http.createServer(routes.handler);

server.listen(3000);
```

```js
//routes.js
exports.handler = requestHandler;
```
