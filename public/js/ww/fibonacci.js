"use strict";

(() => {
  self.onmessage = (e) => self.postMessage(fibonacci(Number(e.data)));
  
  const fibonacci = (num) => {
    if (num <= 1) return 1;

    return fibonacci(num - 1) + fibonacci(num - 2);
  };
})();
