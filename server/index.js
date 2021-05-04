"use strict";

import express from "express";
import path from "path";
import compression from "compression";
import fs from "fs";
import _ from "lodash";

const startServer = () => {
  const server = express();
  const projectPath = process.cwd();
  
  server.use(compression())	
  server.use(express.static("public")); // necessary to be able to access js and css files on client side
  
  server.get("/", (req, res) => {
    res.sendFile(path.join(projectPath + "/public/index.html"));
  });

  server.get("/:name", async (req, res) => {
    res.send(render(req.params.name, { 'users': ['fred', 'barney'], render }))
  });
  
  function render(viewName, ctx = {}) {
    const viewPath = path.join(projectPath + `/public/${viewName}.html`);
    if(!fs.existsSync(viewPath)) { return 404; }

    return _.template(fs.readFileSync(viewPath))(ctx)
  }
  
  const listener = server.listen(3000, () => {
    console.log(`Server started, please go on port ${listener.address().port}`);
  });

  return server;
};

export default startServer;
