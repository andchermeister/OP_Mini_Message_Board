const messageModel = require("../models/messageModel");
const CustomNotFoundError = require("../errors/CustomNotFoundError");
const db = require("../models/queries");

async function getAllMessages(req, res) {
  const messages = messageModel.getAllMessages();
  res.render("index", { messages });
}

async function renderForm(req, res) {
  res.render("form");
}

async function postMessage(req, res) {
  const { author, message } = req.body;

  console.log(author);
  console.log(message);
  messageModel.addMessage(author, message);

  res.redirect("/");
}

async function getMessageById(req, res, next) {
  const { messageId } = req.params;

  try {
    const message = messageModel.getMessageById(messageId);

    if (!message) {
      throw new CustomNotFoundError("Message not found");
    }

    res.render("message", { message });
  } catch (error) {
    return next(error);
  }
}
module.exports = { getAllMessages, renderForm, postMessage, getMessageById };
