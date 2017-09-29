const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Celebrities", { useMongoClient: true });
const Celebrity = require("../models/celebrity");

const celebrityData = [
  {
    name: "Mads Mikkelsen",
    occupation: "actor",
    catchPhrase: "I have an enormous metabolism, so I'm lucky."
  },
  {
    name: "Britney Spears",
    occupation: "singer",
    catchPhrase: "I don't like defining myself. I just am."
  },
  {
    name: "John Malkovich",
    occupation: "actor",
    catchPhrase: "Well, I love to have fun at work."
  }
];

Celebrity.create(celebrityData, (err, docs) => {
  if (err) {
    throw err;
  }

  docs.forEach(celebrity => {
    console.log(celebrityData.name);
  });
  mongoose.connection.close();
});
