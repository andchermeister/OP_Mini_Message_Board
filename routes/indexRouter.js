const { Router } = require("express");
const messageModel = require("../models/messageModel");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  const messages = messageModel.getAllMessages();
  res.render("index", { messages });
});

module.exports = indexRouter;
