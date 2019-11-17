const mongoose = require("mongoose");
const Celebrities = require("../Models/Movies")

mongoose
  .connect('mongodb://localhost/RandomCollection', {
    useNewUrlParser: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const movies = [{
  title: 'Rochelle, Rochelle',
  genre: 'Drama',
  plot: 'a young girl’s strange, erotic journey from Milan to Minsk',
}, {
  title: 'Checkmate',
  genre: 'Suspense',
  plot: 'a king who likes chess… finds himself in real-life jeopardy when, like in the game, everyone is after the king.',
}, {
  title: 'Death Blow',
  genre: 'Action',
  plot: 'When someone tries to blow you up, not because of who you are, but for different reasons altogether.',
}];


Celebrities.create(movies);