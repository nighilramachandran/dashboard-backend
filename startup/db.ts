const oracledb = require("oracledb");

const dbConfig = {
  user: "your_username",
  password: "your_password",
  connectString: "192.168.1.100:1521/ORCL",
};

module.exports = async function () {
  let connection;
  connection = await oracledb.getConnection(dbConfig);

  console.log("Connected to Oracle Database!");

  try {
  } catch (err) {
    console.log("error", err);
  }
};

// async function runQuery() {
//   let connection;

//   try {
//     // Establish connection
//     connection = await oracledb.getConnection(dbConfig);

//     console.log("Connected to Oracle Database!");

//     // Run a simple query
//     const result = await connection.execute("SELECT * FROM employees"); // Example table
//     console.log(result.rows);
//   } catch (err) {
//     console.error("Error connecting to Oracle DB:", err);
//   } finally {
//     if (connection) {
//       try {
//         await connection.close();
//         console.log("Connection closed.");
//       } catch (err) {
//         console.error("Error closing connection:", err);
//       }
//     }
//   }
// }

// // Run the query function
// runQuery();
