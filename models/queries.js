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

async function createMessage(username, text) {
  await pool.query(
    "INSERT INTO messages (username, text, added) VALUES ($1, $2, CURRENT_DATE)",
    [username, text],
  );
}

async function getMessageById(messageId) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    messageId,
  ]);
  return rows[0];
}

async function deleteMessage(messageId) {
  await pool.query("DELETE FROM messages WHERE id = $1", [messageId]);
}

module.exports = {
  getAllMessages,
  createMessage,
  getMessageById,
  deleteMessage,
};
