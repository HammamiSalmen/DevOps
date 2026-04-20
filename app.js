const express = require("express");
const mongoose = require("mongoose");

const app = express();

// Connexion à la base données
mongoose
  .connect("mongodb://127.0.0.1:27017/ProjetIntegration")
  .then(() => {
    console.log("DataBase Successfully Connected");
  })
  .catch((err) => {
    console.log("Unable to connect to database", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.send("bonjour");
});

// Connexion au serveur
app.listen(6969, () => {
  console.log("Server is listening on port 6969");
});
