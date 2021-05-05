"use strict";

import value from "./value.js";
import { getFirstName } from "/js/another.js";

(() => {
  console.log('Hello World');
  console.log(value);
  console.log(getFirstName());
  console.log(window.location.pathname);
  console.log(window);
})();

