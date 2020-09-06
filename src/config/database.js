const mongoose = require("mongoose");
const config = require("./env");

const dbConnection = () => {
  const db = mongoose.connection;

  mongoose.connect(config.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.set("useCreateIndex", true);
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", () => console.log("Connection to Database established....."));
};

module.exports = dbConnection;
