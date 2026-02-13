const { Router } = require("express");
const { getMessageById } = require("../controllers/messageController");

const messageRouter = Router();

messageRouter.get("/:messageId", getMessageById);

module.exports = messageRouter;
