const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");

const celebrities = [
  {
    name: "Bugs Bunny",
    occupation: "Actor",
    catchPhrase: "What's up Doc?"
  },
  {
    name: "Porky Pig",
    occupation: "Actor",
    catchPhrase: "That's all Folks!"
  },
  {
    name: "Tweety Bird",
    occupation: "Actor",
    catchPhrase: "I tawt I taw a puddy tat!"
  }
];

const movies = [
  {
    title: "The Bugs Bunny Movie",
    genre: "Animation",
    plot: "Bugs Bunny reflects on his past cartoon exploits."
  },
  {
    title: "Daffy Duck's Quackbusters",
    genre: "Animation",
    plot:
      "Daffy Duck opens a detective agency for the supernatural along side his Looney Toon buddies."
  },
  {
    title: "Space Jam",
    genre: "Adventure",
    plot:
      "In a desperate attempt to win a basketball match and earn their freedom, the Looney Tunes seek the aid of retired basketball champion, Michael Jordan."
  }
];

mongoose
  .connect("mongodb://localhost/movies", { useNewUrlParser: true })
  .then(async () => {
    const insertCelebritiesResult = await Celebrity.insertMany(celebrities);
    insertCelebritiesResult.forEach(({ name }) =>
      console.log(`Inserted Celebrity: ${name}`)
    );
    const insertMoviesResult = await Movie.insertMany(movies);
    insertMoviesResult.forEach(({ title }) =>
      console.log(`Inserted Movie: ${title}`)
    );
    mongoose.connection.close();
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });
