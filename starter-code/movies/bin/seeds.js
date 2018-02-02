const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/mongoose-movies");

const Celebrity = require("../models/celebrity");

const celebrities = [
  {
    name: "Celebrity 1",
    occupation: "Occupation 1",
    catchPhrase: "Catch phrase 1"
  },
  {
    name: "Celebrity 2",
    occupation: "Occupation 2",
    catchPhrase: "Catch phrase 2"
  },
  {
    name: "Celebrity 3",
    occupation: "Occupation 3",
    catchPhrase: "Catch phrase 3"
  }
];

Celebrity.create(celebrities, (err, docs) => {
  if (err) {
    next(err);
  }

  docs.forEach(celebrity => {
    console.log(celebrity.name);
  });
  mongoose.connection.close();
});
