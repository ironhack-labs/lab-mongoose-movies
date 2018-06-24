const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');
const dbtitle = 'moongose-celebrity';
mongoose.connect(`mongodb://localhost/${dbtitle}`);
Movie.collection.drop();
Celebrity.collection.drop();

const celebrities = [
  {
    name: "Min Yoon-gi",
    occupation: "South Korean rapper, songwriter, and record producer",
    catchPhrase: "Infires man"
  },
  {
    name: "Park Jimin",
    occupation: "Vocalist and dancer for the South Korean boy band BTS",
    catchPhrase: "Excuse meee"
  },
  {
    name: "Kim Tae Hyung",
    occupation: "South Korean singer, songwriter and actor",
    catchPhrase: "Shit down"
  }, 
];

const movies = [
  {
    title: "Rapping Adventures",
    genre: "Action",
    plot: "A korean rapper gets lost in the jungle and has to kill giant snakes with his rapping to scape"
  },
  {
    title: "The Dancing Star",
    genre: "Drama",
    plot: "A boy that has been dancing all his life goes to the biggest challenge in his career to win his prize goal"
  },
  {
    title: "The Pretty Alien",
    genre: "Science fiction",
    plot: "An alien arrives on earth but is too pretty for humans to see directly so he tries to find an ansswer in his own planet"
  }, 
];



Celebrity.create(celebrities,(err) =>{

  if(err) {throw err}
  console.log("Success");
  // mongoose.connection.close();

})


Movie.create(movies,(err) =>{

  if(err) {throw err}
  console.log("Success");
  mongoose.connection.close();

})

module.exports = Movie;