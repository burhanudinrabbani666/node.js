## Redirecting Request

The fs (File System) module in Node.js provides an API for interacting with the file system. It allows you to perform operations such as reading, writing, updating, and deleting files and directories, which are essential for server-side applications and scripts.

reference :
[Node.js File System](https://www.geeksforgeeks.org/node-js/node-js-file-system/)
[Node.js fs.writeFileSync](https://nodejs.org/api/fs.html#fswritefilesyncfile-data-options)

```js
const fs = require("fs"); // file system module

if (url === "/message" && method === "POST") {
  fs.writeFileSync("message.txt", "DUMMY");
  res.statusCode = 302;
  res.setHeader("Location", "/");
  return res.end();
}
```

[Next: Parsing Request Body](./section-3/parsing-request-body.md)
