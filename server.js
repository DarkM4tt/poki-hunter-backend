const expressJS = require("express");
const { configureApp, express, router } = require("./config");

const initializeServer = () => {
  const app = expressJS();

  const appInstance = { app }

  configureApp([express, router]).apply(appInstance);

  return appInstance;
};

module.exports = initializeServer;