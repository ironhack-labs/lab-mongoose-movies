require("dotenv").config();
require(".././app");

const CelebritieModel = require("../models/Celebrity");

const celebrities = [
  {
    name: "Arnold schwarzenegger",
    occupation: "Actor",
    catchPhrase: "I will be back",
  },
  {
    name: "Sylvester Stallone",
    occupation: "Actor",
    catchPhrase: "It wasnt my war",
  },
  { name: "Jessica Alba", occupation: "Actress", catchPhrase: "" },
];

CelebritieModel.insertMany(celebrities)
  .then((dbRes) => console.log(dbRes))
  .catch((err) => console.log(err));
