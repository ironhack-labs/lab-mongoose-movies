const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrities");

const dbName = "mongoose-movies";
mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true });

const celebrities = [
  {
    name: "Liv Tyler",
    occupation: "atriz e ex-modelo",
    catchPhrase: "Você tem que perder pra saber como ganhar."
  },
  {
    name: "Elizabeth Olsen",
    occupation: "atriz e ex-modelo",
    catchPhrase: "Sonhe, sonhe, sonhe até os seus sonhos se tornarem realidade."
  },
  {
    name: "Natalie Portman",
    occupation:
      "atriz produtora e cineasta de dupla nacionalidade israelense e americana",
    catchPhrase:
      "Sexo, drogas e rock'n'roll: livre-se das drogas e você terá bastante tempo para os outros dois."
  },
  {
    name: "Marisa Tomei",
    occupation: "atriz estadunidense de origem italiana",
    catchPhrase: "Você tem que aprender a engatinhar antes de aprender a andar."
  }
];

Celebrity.create(celebrities, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close();
});
