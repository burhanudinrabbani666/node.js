## Blocking and Unblocking

```js
return req.on("end", () => {
  const parsedBody = Buffer.concat(body).toString();
  const message = parsedBody.split("=")[1];
  fs.writeFile("message.txt", message, (err) => {
    // this callback and writeFile make everything asynchronus well
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  });
});
```
