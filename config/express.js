const express = require('express');

const initialize = ({ app }) => {
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", process.env.CLIENT_URL);
    res.setHeader("Access-Control-Allow-Headers", "content-type,Authorization");
    next();
  });

  app.set("trust proxy", 1);
};

module.exports = initialize;