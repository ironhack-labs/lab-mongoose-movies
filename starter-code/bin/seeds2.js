require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/starter-code", { useNewUrlParser: true })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

const CelebrityModel = require("./../models/celebrity");

const celebrities = [
  {
    name: "Guillaume",
    occupation: "Hackeur",
    catchPhrase: "You can name it Toto!",
  },
  {
    name: "Tati",
    occupation: "Hackeuse",
    catchPhrase: "You should check the doc!",
  },
  {
    name: "Franck",
    occupation: "Hackeur",
    catchPhrase: "To be defined soon!",
  },
];

CelebrityModel.create(celebrities)
  .then((dbRes) => console.log(dbRes))
  .catch((dbErr) => console.log(dbErr));