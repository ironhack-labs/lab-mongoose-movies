const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity");
const Movie = require("../models/movie");

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

const movies = [
  {
    title: "Se7en",
    genre: "Crime",
    plot:
      "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives."
  },
  {
    title: "Nine",
    genre: "Drama",
    plot:
      "Famous film director Guido Contini struggles to find harmony in his professional and personal lives, as he engages in dramatic relationships with his wife, his mistress, his muse, his agent, and his mother."
  },
  {
    title: "8 Mile",
    genre: "Music",
    plot:
      "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives."
  },
  {
    title: "Oceans Eleven",
    genre: "Crime",
    plot:
      "Danny Ocean and his eleven accomplices plan to rob three Las Vegas casinos simultaneously."
  },
  {
    title: "Twelve Monkeys",
    genre: "Adventure",
    plot:
      "Follows the journey of a time traveler from the post-apocalyptic future who appears in present day on a mission to locate and eradicate the source of a deadly plague that will nearly destroy the human race."
  }
];

Celebrity.create(celebrities, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${celebrities.length} celebrities`);
  mongoose.connection.close();
});

Movie.create(movies, err => {
  if (err) {
    throw err;
  }
  console.log(`Created ${movies.length} movies`);
  mongoose.connection.close();
});
