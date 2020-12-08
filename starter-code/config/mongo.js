const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => console.log("mongodb connected :)"));

mongoose.connection.on("error", () => console.log("db connection error :("));
