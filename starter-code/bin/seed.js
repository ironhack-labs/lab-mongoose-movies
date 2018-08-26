const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");

const dbName = "celebs";
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "Cem Karaca",
    occupation: "Singer",
    catchPhrase: "Ne olur ıslak ıslak",
    rating: 7
  },
  {
    name: "Ibrahim Tatlıses",
    occupation: "Singer, filmstar, mafia",
    catchPhrase: "Mavi, mavi masmavi",
    rating: 9
  },
  {
    name: "Angela Merkel",
    occupation: "Politician",
    catchPhrase: "Wir schaffen das.",
    rating: 8
  },
  {
    name: "Emmanuel Macron",
    occupation: "Président de la république",
    catchPhrase: "Je ne suis pas socialiste.",
    rating: 8
  }
];

Celebrity.create(celebrities, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close();
});
