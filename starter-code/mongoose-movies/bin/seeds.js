require("dotenv").config();

const mongoose = require("mongoose");
const Celebrity = require("..//models/Celebrity")
const Movie = require("..//models/Movie")
const dbName = process.env.DBURL;
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
    {
        name: "Professor Hubert J. Farnsworth",
        occupation: "CEO/Owner of Planet Express, Lecturer at Mars University",
        catchPhrase: "Good news everyone",
    },
    {
        name: "Bender Bending Rodríguez",
        occupation: "Industrial Robot, Former Pharaoh of Osiris 4, Former busser at Elzar's, Former member of the Robot Mafia, God of the Shrimpkins, Chef for Planet Express",
        catchPhrase: "kiss my shiny metal arse",
    },
    {
        name: "John A. Zoidberg",
        occupation: "Staff doctor at the Planet Express delivery company.",
        catchPhrase: "What an honor!",
    }
];

Celebrity.create(celebrities, (err, data) => {
    if (err) {
      throw err;
    }
    console.log(`created${celebrities.length}celebrities`);
    mongoose.disconnect();
  });
  

  const movies = [
    {
        title: "Inception",
        genre: "Thriller",
        plot: "Mind manipulation",
    },
    {
        title: "Interstellar",
        genre: "Science Fiction",
        plot: "Interplanetary exploration",
    },
    {
        title: "Seven",
        genre: "Terror, Thriller",
        plot: "Serial Killer Manhunt",
    }
];

Movie.create(movies, (err, data) => {
    if (err) {
      throw err;
    }
    console.log(`created${movies.length}movies`);
    mongoose.disconnect();
  });
  