const pool = require("./pool");

// async function testConnection() {
//   try {
//     const { rows } = await pool.query("SELECT NOW()");
//     console.log("DB Connection OK - current time:", rows[0].now);
//   } catch (error) {
//     console.error("DB Connection FAILED:", error);
//     throw error;
//   }
// }

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

module.exports = {};
