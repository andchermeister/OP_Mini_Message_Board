const messageModel = require("../models/messageModel");
const CustomNotFoundError = require("../errors/CustomNotFoundError");

function getMessageById(req, res) {
  const { messageId } = req.params;
  let message;
  try {
    message = messageModel.getMessageById(messageId);

    if (!message) {
      throw new CustomNotFoundError("Message not found");
    }
  } catch (error) {
    console.error("Error retrieving author:", error);
    res.status(500).send("Internal Server Error");
  }

  res.render("message", { message });
}
module.exports = { getMessageById };
