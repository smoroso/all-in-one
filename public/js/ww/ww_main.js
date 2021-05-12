"use strict";

const executeWebWorker = () => {
  const worker = new Worker("/js/ww/fibonacci.js");

  worker.onmessage = (event) => {
    document.getElementById("result").textContent = event.data;
    console.log("Got: " + event.data);
  };

  worker.onerror = (error) => {
    console.log("Worker error: " + error.message);
    throw error;
  };

  worker.postMessage(13);
};

export default executeWebWorker;
