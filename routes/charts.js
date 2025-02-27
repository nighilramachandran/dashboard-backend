const express = require("express");
const _ = require("lodash");

const dbConnection = require("../DB/db");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const db = await dbConnection();
    if (dbConnection) {
      const result = await db.execute("SELECT * from common_parameters");
      if (result) {
        return res.status(200).send(result.rows);
      }
    }
  } catch (error) {
    console.log("Error in route", error);
  }
});

module.exports = router;
