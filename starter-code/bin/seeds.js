const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");

const dbtitle = "lab-mongoose-movies";
mongoose.connect(`mongodb://localhost/${dbtitle}`);

Celebrity.collection.drop();

const celebrities = [
  {
    name: "Carlos",
    occupation: "singer",
    catchPhrase: "Big Bisou!"
  },
  {
    name: "Mimi",
    occupation: "actress",
    catchPhrase: "Gotcha!"
  },
  {
    name: "Lucky",
    occupation: "draw",
    catchPhrase: "Pan!"
  }
];

Celebrity.insertMany(celebrities)
  .then(celebrities => {
    celebrities.forEach(celebrity => {
      console.log(`${celebrity.name} added!`);
    });
    mongoose.connection.close();
  })
  .catch(error => {
    console.log(error);
  });
