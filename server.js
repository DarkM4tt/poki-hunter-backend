const expressJS = require("express");

const initializeServer = () => {
  const app = expressJS();

  const appInstance = { app }

  return appInstance;
};

module.exports = initializeServer;