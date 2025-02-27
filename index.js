const express = require("express");
require("dotenv").config();

const app = express();

const route_startup = require("./startup/routes");
console.log("route_startup", route_startup(app));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`listing on port ${port}`));

module.exports = server;
