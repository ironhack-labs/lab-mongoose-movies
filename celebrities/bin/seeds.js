const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity.js");
const Movie = require("../models/Movie.js");

const dataCelebrities = [
  {
    name: "Judith Butler",
    occupation: "gender theorist",
    catchPhrase:
      "Gender is a kind of imitation for which there is no original; in fact, it is a kind of imitation that produces the very notion of the original as an effect and consequence of the imitation itself"
  },
  {
    name: "Simone de Beauvoir",
    occupation: "existentialist philosopher",
    catchPhrase:
      "I am too intelligent, too demanding, and too resourceful for anyone to be able to take charge of me entirely. No one knows me or loves me completely. I have only myself"
  },
  {
    name: "Hannah Arendt",
    occupation: "political theorist",
    catchPhrase:
      "The sad truth is that most evil is done by people who never make up their minds to be good or evil."
  }
];

const dataMovies = [
  {
    title: "Videodrome",
    genre: "Body Horror",
    plot:
      "Max Renn runs a TV channel, and when looking for new material to show--he discovers Videodrome. His girlfriend, Nicki Brand, goes to audition for the show, and Max gets drawn into the underlying plot that uses the show as its front for a global conspiracy."
  },
  {
    title: "Wellcome to the Dollhouse",
    genre: "Dramedy",
    plot:
      "An unattractive seventh grader struggles to cope with inattentive parents, snobbish classmates, a smart older brother, an attractive younger sister, and her own insecurities in suburban New Jersey."
  },
  {
    title: "Ghost in the Shell",
    genre: "Sci-fi",
    plot:
      "A cyborg policewoman and her partner hunt a mysterious and powerful hacker called the Puppet Master."
  }
];

mongoose
  .connect(
    "mongodb://localhost/celebrities",
    { useNewUrlParser: true }
  )
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .then(() => {
    Celebrity.collection.drop();
    Celebrity.insertMany(dataCelebrities);
  })
  .then(() => {
    Movie.collection.drop();
    Movie.insertMany(dataMovies);
  })
  .then(() => {
    mongoose.disconnect();
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });
