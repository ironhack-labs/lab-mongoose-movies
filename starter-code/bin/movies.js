require('../app');
const MovieModel = require('../models/Movie');

const seedMovies = [
  {
    title: "super shumon",
    genre: "drama",
    plot: "doggy is happy"
  },
  {
    title: "super star",
    genre: "drama",
    plot: "aspiring singer excels"
  },
  {
    title: "super veggie",
    genre: "comedy",
    plot: "Ms. eggplant has escaped from the kitchen"
  },
]

MovieModel.insertMany(seedMovies)
.then((movies) => console.log(movies))
.catch((err) => next(err))