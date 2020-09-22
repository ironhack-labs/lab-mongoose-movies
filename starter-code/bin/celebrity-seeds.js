require("dotenv").config();
const celebrityModel = require("../models/celebrityModel");
const mongoose = require("mongoose");

const Celebrity = [
  {
    name: "Bruce Willis",
    occupation: "Actor",
    catchPhrase: "yipikaïey mfker",
  },
];

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((self) => {
    celebrityModel.create(Celebrity)
      .then((dbResult) => {
        console.log(dbResult);
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });
