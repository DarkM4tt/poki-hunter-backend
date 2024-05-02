const expressJS = require("express");
const { express } = require("./config");

const initializeServer = () => {
  const app = expressJS();

  const appInstance = { app }

  configureApp([express]).apply(appInstance);

  return appInstance;
};

module.exports = initializeServer;