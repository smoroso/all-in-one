"use strict";

import express from "express";
import path from "path";
import compression from "compression";

const startServer = () => {
  const server = express();
  const projectPath = process.cwd();
  
  server.use(compression())	
  server.use(express.static("public")); // necessary to be able to access js and css files on client side
  
  server.get("/", (req, res) => {
    res.sendFile(path.join(projectPath + "/public/index.html"));
  });
  
  server.get("/about", (req, res) => {
    res.sendFile(path.join(projectPath + "/public/about.html"));
  });
  
  const listener = server.listen(3000, () => {
    console.log(`Server started, please go on port ${listener.address().port}`);
  });
};

export default startServer;
