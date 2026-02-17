const express = require("express");
const app = express();
const path = require("node:path");
const PORT = process.env.PORT || 3000;

const indexRouter = require("./routes/indexRouter");
const newMessageRouter = require("./routes/newMessageRouter");
const messageRouter = require("./routes/messageRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);
app.use("/messages", messageRouter);
app.use("/new", newMessageRouter);
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.statuCode || 500).send(err.message);
});

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(
    `Mini Message Board app - listening on port http://localhost:${PORT}`,
  );
});
