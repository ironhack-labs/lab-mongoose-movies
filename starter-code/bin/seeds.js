const CelebrityModel = require("./../models/celebrity");
const mongoose = require("mongoose");

const celebrities = [
  {
    name: "Buzz Lightyear",
    occupation: "Super Hero",
    catchPhrase: "To infinity and beyond."
  },
  {
    name: "Clint Eastwood",
    occupation: "Director",
    catchPhrase: "Tomorrow is promised to no one."
  },
  {
    name: "Gustav Klimt",
    occupation: "Painter",
    catchPhrase: "All art is erotic. "
  }
];

CelebrityModel.create(celebrities)
  .then(dbRes => {
    console.log("successfully created a new celebrity", dbRes);
  })
  .catch(err => {
    console.log("error, creating new celebrity didn't work", err);
  });

mongoose
  .connect("mongodb://localhost/lab-mongoose-movies", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

module.exports = celebrities;
