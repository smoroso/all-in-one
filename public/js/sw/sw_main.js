"use strict";

const startServiceWorker = () => {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("js/sw/sw.js").then((registration) => {
        // Registration was successful
        console.log("ServiceWorker registration successful with scope: ", registration.scope);
      }, (err) => {
        // registration failed :(
        console.log("ServiceWorker registration failed: ", err);
      });
    });
  }
};

export default startServiceWorker;

