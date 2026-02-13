const { Router } = require("express");
const messageModel = require("../models/messageModel");

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => res.render("form"));

newMessageRouter.post("/", (req, res) => {
  const { author, message } = req.body;

  console.log(author);
  console.log(message);
  messageModel.addMessage(author, message);

  res.redirect("/");
});

module.exports = newMessageRouter;
