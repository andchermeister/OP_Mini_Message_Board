const messageModel = require("../models/messageModel");
const CustomNotFoundError = require("../errors/CustomNotFoundError");
const db = require("../models/queries");

async function getAllMessages(req, res) {
  // const messages = messageModel.getAllMessages();
  // res.render("index", { messages });
  const messages = await db.getAllMessages();
  console.log("Messages: ", messages);
  res.render("index", { messages });
}

async function renderForm(req, res) {
  res.render("form");
}

async function createMessage(req, res) {
  const { username, text } = req.body;

  console.log(username);
  console.log(text);
  await db.createMessage(username, text);
  res.redirect("/");
}

async function getMessageById(req, res, next) {
  const { messageId } = req.params;

  try {
    const message = await db.getMessageById(messageId);

    if (!message) {
      throw new CustomNotFoundError("Message not found");
    }

    res.render("message", { message });
  } catch (error) {
    return next(error);
  }
}

async function deleteMessageById(req, res) {
  const { messageId } = req.params;
  await db.deleteMessage(messageId);
  res.redirect("/");
}
module.exports = {
  getAllMessages,
  renderForm,
  createMessage,
  getMessageById,
  deleteMessageById,
};
