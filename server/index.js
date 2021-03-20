"use strict";

(() => {
  const express = require("express");
  const path    = require("path");

  const server = express();
  const projectPath = process.cwd();

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

  module.exports = server;
})();
