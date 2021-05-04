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

  server.get("/about", async (req, res) => {
    res.send(render("about", { 'users': ['fred', 'barney'] }))
  })
  
  function render(viewName, ctx = {}) {
    return _.template(fs.readFileSync(path.join(projectPath + `/public/${viewName}.html`)))(ctx)
  }
  
  const listener = server.listen(3000, () => {
    console.log(`Server started, please go on port ${listener.address().port}`);
  });

  return server;
};

export default startServer;
