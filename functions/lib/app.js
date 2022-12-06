const express = require("express");

exports.initApp = function(router) {
  const app = express();
  app.use(express.json());

  if (router) {
    app.use("/api", router);
  }

  return app;
};
