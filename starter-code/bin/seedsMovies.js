require("dotenv").config();
const mongoose = require("mongoose");
const Movie = require("../models/Movie");

const movies = [
  {
    title: "How to Train Your Dragon",
    genre: "Animation",
    plot:
      "Long ago up North on the Island of Berk, the young Viking, Hiccup, wants to join his town's fight against the dragons that continually raid their town. However, his macho father and village leader, Stoik the Vast, will not allow his small, clumsy, but inventive son to do so. Regardless, Hiccup ventures out into battle and downs a mysterious Night Fury dragon with his invention, but can't bring himself to kill it. Instead, Hiccup and the dragon, whom he dubs Toothless, begin a friendship that would open up both their worlds as the observant boy learns that his people have misjudged the species. But even as the two each take flight in their own way, they find that they must fight the destructive ignorance plaguing their world."
  },
  {
    title: "Night School",
    genre: "Comedy",
    plot:
      "In 2001, high-school student Teddy Walker drops out of school when he's unable to concentrate during a crucial test. In 2018 he works as a barbecue-grill salesman and dating a wealthy woman named Lisa, and has developed a careful financial strategy that allows him to maintain the illusion that he is better off than he actually is. But his life falls apart just as he learns that he will inherit control of the store when the current manager retires: As he proposes to Lisa in the shop, he accidentally triggers an explosion when a champagne cork pops open a gas tank; the manager runs away with the insurance from the explosion. Teddy's friend is willing to give him a job--if he can earn his GED."
  },
  {
    title: "Avengers: Infinity War",
    genre: "Action",
    plot:
      "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment, the fate of Earth and existence has never been more uncertain"
  }
];

mongoose.connect(`mongodb://localhost/${process.env.DBNAME}`, {
  useNewUrlParser: true
});
// tirar la coleccion para insertar todo nuevo
Movie.collection.drop();

Movie.create(movies)
  .then(movies => {
    console.log(`Se insertaron ${movies.length} peliculas`);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });
