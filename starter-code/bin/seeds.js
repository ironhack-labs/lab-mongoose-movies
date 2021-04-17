const initialCelebrities = require("../data");
const Celebrity = require("../model/Celebrity.model");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/iron-celebrities", { useNewUrlParser: true })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}" to create the firsts celebs.`
    );
    return Celebrity.insertMany(initialCelebrities);
  })
  .then((celebrities) => {
    console.log(celebrities.length, "inserted.");
    return mongoose.connection.close();
  })
  .then(() => console.log("Connection closed"))
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });
