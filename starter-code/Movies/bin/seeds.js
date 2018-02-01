const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/movies");
const Celebrity = require("../models/celebrity");

const celebrityAdd = [
  {
    name: "Hermione Granger",
    occupation: "student",
    catchPhrase: "It's leviOsa, not levioSA!"
  },
  {
    name: "Jeff Tuche",
    occupation: "French president",
    catchPhrase: "Et moi c'est tuche, avec un T, comme t'es la ?"
  },
  {
    name: "Claudy Focan",
    occupation: "Sales Marketing Manager des abattoirs d’Anderlecht",
    catchPhrase:
      "Je n'en peux plus, je suis au bout du rouleau, j'ai envie de rentrer, me foutre mes savates et terminé bonsoir!"
  }
];

celebrityAdd.forEach(celebrityObject => {
  Celebrity.create(celebrityObject, (err, celebrity) => {
    if (err) {
      throw err;
    }
    console.log(celebrity.name);

    mongoose.connection.close();
  });
});
