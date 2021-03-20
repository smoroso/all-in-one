"use strict";

(() => {
  const express = require("express");

  const server = express();

  server.get("/", (req, res) => {
    res.write("Hello World!");
    res.end();
  });

  const listener = server.listen(3000, () => {
    console.log(`Process ${process.pid} started on port ${listener.address().port}`);
  });

  module.exports = server;
})();
