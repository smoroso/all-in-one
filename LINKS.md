# Node
## Basics
- https://www.w3schools.com/nodejs/default.asp
- https://www.tutorialsteacher.com/nodejs/create-nodejs-web-server
- https://nodejs.org/api/documentation.html
- https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm

## Tips
- https://www.digitalocean.com/community/tutorials/nodejs-how-to-use__dirname
- https://scoutapm.com/blog/nodejs-architecture-and-12-best-practices-for-nodejs-development
- https://gist.github.com/joepie91/c0069ab0e0da40cc7b54b8c2203befe1
- https://cheatcode.co/tutorials/how-to-add-cluster-support-to-node-js

## Q&A
- Does it make sense to use IIFE? -> NO; Internally, Node already wraps the contents of the module with a function to create a new scope
https://stackoverflow.com/questions/42607508/do-making-a-iife-make-sense-in-nodejs-module
https://github.com/nodejs/node/blob/f385f77f1d011786cb1c5e80f257fa043f4c608b/lib/internal/bootstrap_node.js#L511-L514
https://www.freecodecamp.org/news/5-javascript-bad-parts-that-are-fixed-in-es6-c7c45d44fd81/

- Does it make sense to "use strict";? -> YES; NodeJS modules are not in strict mode by default
https://tvernon.tech/blog/javascript-strict-mode
https://github.com/nodejs/node/search?l=Markdown&q=use+strict

- save-dev VS save? -> save when core dependency; save-dev for optional
https://www.geeksforgeeks.org/what-is-the-difference-between-save-and-save-dev-in-node-js/

## Template Engine
### Top List
1. Pug
2. Ejs
3. React
4. Underscore or Lodash
https://expressjs.com/en/resources/template-engines.html
https://www.arrowhitech.com/node-js-templating-engine-top-10-best-every-developer-must-know/

### Pug
- https://pugjs.org/api/getting-started.html
- https://auth0.com/blog/create-a-simple-and-stylish-node-express-app/
- https://medium.com/@SigniorGratiano/server-side-rendering-with-pug-templates-e1e5947d4c1a

### Ejs
- https://raddy.co.uk/blog/nodejs-express-layouts-and-partials/
- https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application

### React
- https://github.com/reactjs/express-react-views

### Lodash
- https://odino.org/the-simplest-template-engine-for-nodejs/
- https://github.com/sgamon/lodash-express

## Service Workers
- https://developers.google.com/web/fundamentals/primers/service-workers
- https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers

## Web Workers
- https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers
- https://medium.com/young-coder/a-simple-introduction-to-web-workers-in-javascript-b3504f9d9d1c
- https://www.w3schools.com/html/html5_webworkers.asp
