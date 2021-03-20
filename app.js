"use strict";

(() => {
  const cluster = require("cluster");
  const numCPUs = require("os").cpus().length;

  if (cluster.isMaster) {
    // master process
    console.log(`Master ${process.pid} is running`);

    console.log(`We will create ${numCPUs} Workers`);
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }

    cluster.on("online", (worker) => {
        console.log(`Worker ${worker.process.pid} is online`);
    });

    cluster.on("exit", (worker, code, signal) => {
      console.log(`Worker ${worker.process.pid} died with code: ${code}, and signal: ${signal}`);
      console.log("Starting a new worker");
      cluster.fork();
    });
  } else {
    // worker process
    require("./server/index");
  }
})();
