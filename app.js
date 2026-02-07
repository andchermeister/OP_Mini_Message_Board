const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => res.render("index"));
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
