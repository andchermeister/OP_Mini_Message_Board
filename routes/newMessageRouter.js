const { Router } = require("express");

const newMessageRouter = Router();

newMessageRouter.get("/new", (req, res) =>
  res.render("newMessage", { message: "that is a new message page" }),
);

module.exports = newMessageRouter;
