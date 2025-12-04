## Installing 3rd party library

install nodemon

nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node. To use nodemon, replace the word node on the command line when executing your script.

install for only delevopment

```bash
npm install nodemon --save-dev
```

- Global features: Keywords like const or function but also some global objects like process

- Core Node.js Modules: Examples would be the file-system module ("fs"), the path module ("path") or the Http module ("http")

- Third-party Modules: Installed via npm install - you can add any kind of feature to your app via this way

Global features are always available, you don't need to import them into the files where you want to use them.

Core Node.js Modules don't need to be installed (NO npm install is required) but you need to import them when you want to use features exposed by them.

Example:

    const fs = require('fs');

You can now use the fs object exported by the "fs" module.

Third-party Modules need to be installed (via npm install in the project folder) AND imported.

Example (which you don't need to understand yet - we'll cover this later in the course):

```bash
// In terminal/ command prompt
npm install --save express-session

// In code file (e.g. app.js)
const sessions = require('express-session');
```

[Next: Installing Nodeemon for auto restart](./Installing-Nodeemon-for-auto-restart.md)
