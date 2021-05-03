# Node
## Basics
- https://www.w3schools.com/nodejs/default.asp
- https://www.tutorialsteacher.com/nodejs/create-nodejs-web-server
- https://nodejs.org/api/documentation.html

## Tips
- https://www.digitalocean.com/community/tutorials/nodejs-how-to-use__dirname
- https://scoutapm.com/blog/nodejs-architecture-and-12-best-practices-for-nodejs-development
- https://cheatcode.co/tutorials/how-to-add-cluster-support-to-node-js

## Q&A
- Does it make sense to use IIFE? -> NO; Internally, Node already wraps the contents of the module with a function to create a new scope
https://stackoverflow.com/questions/42607508/do-making-a-iife-make-sense-in-nodejs-module
https://github.com/nodejs/node/blob/f385f77f1d011786cb1c5e80f257fa043f4c608b/lib/internal/bootstrap_node.js#L511-L514
https://www.freecodecamp.org/news/5-javascript-bad-parts-that-are-fixed-in-es6-c7c45d44fd81/

- Does it make sense to "use strict";? -> YES; NodeJS modules are not in strict mode by default
https://tvernon.tech/blog/javascript-strict-mode
https://github.com/nodejs/node/search?l=Markdown&q=use+strict

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

### Ejs
- https://raddy.co.uk/blog/nodejs-express-layouts-and-partials/
- https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application

### React
- https://github.com/reactjs/express-react-views

### Lodash
- https://odino.org/the-simplest-template-engine-for-nodejs/

