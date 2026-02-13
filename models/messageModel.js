const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

function getAllMessages() {
  return messages;
}

function addMessage(user, text) {
  messages.push({
    id: Date.now(),
    text,
    user,
    added: new Date(),
  });
}

function getMessageById(messageId) {
  const id = Number(messageId);
  return messages.find((message) => message.id === id);
}

module.exports = {
  getAllMessages,
  addMessage,
  getMessageById,
};
