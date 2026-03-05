const { Router } = require("express");
const messageController = require("../controllers/messageController");
const messageRouter = Router();

messageRouter.get("/", messageController.getAllMessages);
messageRouter.get("/new", messageController.renderForm);
messageRouter.post("/new", messageController.createMessage);
messageRouter.get("/messages/:messageId", messageController.getMessageById);
messageRouter.post(
  "/messages/:messageId/delete",
  messageController.deleteMessageById,
);

module.exports = messageRouter;
