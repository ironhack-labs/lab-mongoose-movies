const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie')
const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

Celebrity.collection.drop();
Movie.collection.drop();

const celebs = [
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Kevin",
    occupation: "Minion",
    catchPhrase: "Bello!"
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Stuart",
    occupation: "Minion",
    catchPhrase: "Bee Do Bee Do Bee Do!"
  },
  {
    _id: new mongoose.Types.ObjectId(),
    name: "Bob",
    occupation: "Minion",
    catchPhrase: "Para tu"
  }
];

const movies = [
  {
    title: "Despicable Me",
    genre: "Animated Movies",
    plot: "Meet Gru and his minions. Join them in their journey to become the gratest evil masterminds", 
    cast: [celebs[0]._id, celebs[1]._id, celebs[2]._id],
    reviews: []
  }, 
  {
    title: "Despicable Me 2",
    genre: "Animated Movies",
    plot: "Join our favorite not-so-evil criminals in their attempt to save the world", 
    cast: [celebs[0]._id, celebs[1]._id, celebs[2]._id],
    reviews: []
  },
  {
    title: "Despicable Me 3",
    genre: "Animated Movies",
    plot: "Our minions search for a new boss.", 
    cast: [celebs[0]._id, celebs[1]._id, celebs[2]._id],
    reviews: []
  }
];

//Create celebrities' entries to db
Celebrity.create(celebs)
.then((result) => {
  console.log(`${result.length} elements added to db.`);
  //then create movies' entries to db.
  Movie.create(movies)
  .then((result) => {
    console.log(`${result.length} elements added to db.`);
    //disconnect from db when done.
    mongoose.disconnect();
  })
  .catch((err) => {
    console.log(err);
  });
})
.catch((err) => {
  console.log(err);
});