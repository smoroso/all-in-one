"use strict";

import startServiceWorker from "/js/sw/sw_main.js";
import executeWebWorker from "/js/ww/ww_main.js";

(() => {
  startServiceWorker();
  executeWebWorker();
})();
