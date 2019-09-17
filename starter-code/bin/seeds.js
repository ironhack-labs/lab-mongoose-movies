const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity')
const Movie = require('../models/Movie')

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

var initCelebs = [
  {
    celebrity: 'Mike Gold',
    occupation: 'Bank Robber',
    catchPhrase: 'Gimme the gold mate or seal your fate'},
  {
    celebrity: 'Joe Speeds',
    occupation: 'Stunt Driver',     
    catchPhrase: 'Hasta la vista baby'},
  {
    celebrity: 'Mandy Snow',
    occupation: 'Actress',  
    catchPhrase: "Let it snow"}
]   

var initMovies = [
  {
    title: 'The Stapler',
    genre: 'Comedy',
    plot: 'Rob Schneider is The Stapler',
    image: 'https://i.kym-cdn.com/photos/images/original/000/282/287/092.jpg'},
  {
    title: 'A Carrot',
    genre: 'Comedy',
    plot: 'Rob Schneider is a carrot',
    image: 'https://2static1.fjcdn.com/comments/Rob+schneider+in+derpee+de+derpe+dee+derp+de+dumb+_52735276fcb792aee038c4dca82a0b5f.jpg'},
  {
    title: 'Da Derp Dee Derp Da Teetley Derpee Derpee Dumb',
    genre: 'Comedy',
    plot: 'Rob Schneider is Da Derp Dee Derp Da Teetley Derpee Derpee Dumb',
    image: 'https://i.ytimg.com/vi/ZxYA6duF-9E/hqdefault.jpg'},
]  

Celebrity.insertMany(initCelebs)
  .then(data => console.log("add successful"))
  .catch(err => {
    console.log("error while adding", err);
  });

Movie.insertMany(initMovies)
  .then(data => console.log("add successful"))
  .catch(err => {
    console.log("error while adding", err);
});
