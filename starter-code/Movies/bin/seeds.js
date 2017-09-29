const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Celebrities", { useMongoClient: true });
const Celebrity = require("../models/Celebrity");

const CelebrityData = [
  {
    name: "Bob Marley",
    occupation: "Singer",
    catchPhrase: "Catch a Fire"
  },
  {
    name: "Javier Pastore",
    occupation: "Soccer Player",
    catchPhrase: "Joga Bonito"
  },
  {
    name: "Arnold Schwarzenegger",
    occupation: "Actor",
    catchPhrase: "Hasta la vista, Baby"
  }
];

Celebrity.create(CelebrityData, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach(Celebrity => {
    console.log(CelebrityData.name);
  });
  mongoose.connection.close();
});
