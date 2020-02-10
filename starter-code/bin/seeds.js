const mongoose = require("mongoose");
const Celebrity = require("./../models/Celebrity");

const dbName = "celebrities";

const celebs = [
  {
    name: "Kanye West",
    occupation: "Artist",
    catchPhrase: "You will torch her terrifying wind"
  },
  {
    name: "Morgan Freeman",
    occupation: "Actor",
    catchPhrase: "Observe the majority of their coolness!"
  },
  {
    name: "Stewie Griffin",
    occupation: "TV-Star",
    catchPhrase: "Bag not disunited."
  }
];

const movies = [
  {
    title: "Borat",
    genre: "Comedy",
    plot: "That Kazakhstan dude"
  },
  {
    title: "Snatch",
    genre: "Action",
    plot: "Gypsies and English lads"
  },
  {
    title: "Godfather",
    genre: "Drama",
    plot: "Very Long Story"
  },
  {
    title: "Fast and Furious",
    genre: "Action",
    plot: "Boring"
  }
];

mongoose
  .connect(`mongodb://localhost/${dbName}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    const pr = Celebrity.create(celebs);
    return pr;
  })
  .then(() => {
    const pr = Movies.create(movies);
    return pr;
  })
  .then(createdCelebs => {
    const pr = mongoose.connection.close();
    return pr;
  })
  .then(() => console.log("Connection closed!"))
  .catch(err => console.error("Error connecting to mongo", err));
