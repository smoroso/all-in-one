"use strict";

import express from "express";
import path from "path";
import compression from "compression";
import fs from "fs";
import _ from "lodash";

const startServer = () => {
  const server = express();
  const projectPath = process.cwd();

  server.use(compression());
  server.use(express.static(path.join(projectPath, "public"))); // necessary to be able to access js and css files on client side

  const partials = {
    footer: render("layout/footer")
  };
  server.get("/", (req, res) => {
    res.send(render("layout/layout", { name: "index", partials, data: {}, render }));
  });

  server.get("/:name", async (req, res) => {
    if(!["about", "basic"].includes(req.params.name)) { return res.sendStatus(404); }

    const data = { users: ["fred", "barney"] };
    res.send(render("layout/layout", { name: req.params.name, partials, data, render }));
  });

  function render(viewName, ctx = {}) {
    const viewPath = path.join(projectPath + `/views/${viewName}.html`);
    if(!fs.existsSync(viewPath)) { return 404; }

    return _.template(fs.readFileSync(viewPath))(ctx);
  }

  const listener = server.listen(process.env.PORT || 5000, () => {
    console.log(`Server started, please go on port ${listener.address().port}`);
  });

  return server;
};

export default startServer;
