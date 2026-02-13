const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
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
    text,
    user,
    added: new Date(),
  });
}

module.exports = {
  getAllMessages,
  addMessage,
};
