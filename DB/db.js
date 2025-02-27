const oracledb = require("oracledb");

const dbConfig = {
  user: "arex_temp",
  password: "arex_temp",
  connectString: "172.18.10.10:1521/arextest",
};

module.exports = async function () {
  try {
    const connection = await oracledb.getConnection(dbConfig);
    console.log("Connected to Oracle Database!");
    return connection;
  } catch (error) {
    console.error("Error connecting to Oracle DB:", err);
    return null;
  }
  // const result = await connection.execute("SELECT * from common_parameters");
  // console.log(result.rows);
};
