## wahit is express?

In this first Express article we answer the questions "What is Node?" and "What is Express?", and give you an overview of what makes the Express web framework special. We'll outline the main features, and show you some of the main building blocks of an Express application (although at this point you won't yet have a development environment in which to test it).

[Express](https://expressjs.com/)
[Express/Node introduction](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/Express_Nodejs/Introduction)

```bash
npm install --save express
```

```js
const express = require("express");
const app = express();

app.use((req, res, next) => {
  // next is function
  console.log("In the middleware");

  next(); // for allowing move to next middleware
}); // add new middleware function

app.use((req, res, next) => {
  // next is function
  console.log("Hello World");
}); // add new middleware function
```
