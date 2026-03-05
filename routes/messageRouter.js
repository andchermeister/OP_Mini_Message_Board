const { Router } = require("express");
const messageController = require("../controllers/messageController");
const messageRouter = Router();

messageRouter.get("/", messageController.getAllMessages);
messageRouter.get("/messages/:messageId", messageController.getMessageById);
messageRouter.get("/new", messageController.renderForm);
messageRouter.post("/new", messageController.postMessage);

module.exports = messageRouter;
