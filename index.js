const express = require("express");
require("dotenv").config();

const app = express();

require("./startup/routes")(app);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`listing on port ${port}`));

module.exports = server;
