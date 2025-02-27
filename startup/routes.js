const express = require("express");
const morgan = require("morgan");

module.export = function (app) {
  app.use(express.json());
  //   app.use(helmet());
  //   app.use(morgan("tiny"));
  //   app.use(express.urlencoded({ extended: true }));
};
