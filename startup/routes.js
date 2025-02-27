const express = require("express");
const helmet = require("helmet");
const chartRoute = require("../routes/charts");

module.exports = function (app) {
  app.use(express.json());
  app.use(helmet());
  app.use(express.urlencoded({ extended: true }));
  app.use("/api/charts", chartRoute);
};
