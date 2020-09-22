const celebrities = [
  {
    name: "James Cameron",
    occupation: "Realisator",
    catchPhrase: "Action !",
  },
  {
    name: "Quentin Tarantino",
    occupation: "Producer",
    catchPhrase: "Blood everywhere !",
  },
  {
    name: "Michael Bay",
    occupation: "Realisator",
    catchPhrase: "BOUM !",
  },
];
require("dotenv").config();
const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((self) => {
    Celebrity.create(celebrities)
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
