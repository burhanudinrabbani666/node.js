## Parsing Request Body

req.on("", calback) : Adds the listener function to the end of the listeners array for the event named eventName. No checks are made to see if the listener has already been added. Multiple calls passing the same combination of eventName and listener will result in the listener being added, and called, multiple times.

### What is Chunk in Node.js ?

A chunk is a piece of data sent through a stream. Streams in Node.js are objects that allow you to read data **from a source** or write data to a destination in a continuous manner. Instead of reading or writing the entire dataset at once, Node.js processes data in chunks, allowing for efficient handling of large volumes of data without consuming extensive memory resources.

[Geek: What is chunk](https://www.geeksforgeeks.org/node-js/what-is-chunk-in-node-js/)

### What is Buffer in Node?

Buffer in Node is a built-in object used to perform operations on raw binary data. The buffer class allows us to handle the binary data directly.
Syntax:

```js
const buf = Buffer.alloc(10); // Allocates a buffer of 10 bytes.
```

Generally, Buffer refers to the particular memory location in memory. Buffer and array have some similarities, but the difference is array can be any type, and it can be resizable. Buffers only deal with binary data, and it can not be resizable. Each integer in a buffer represents a byte. console.log() function is used to print the Buffer instance.

```js
  if (url === "/message" && method === "POST") {
    // get data from form
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });

    //  fired when is done parsing
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1].replaceAll("+", " ");
      fs.writeFileSync("message.txt", message); // store in so this method not in sync
    });
```
