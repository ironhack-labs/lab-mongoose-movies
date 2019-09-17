const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity')
const Movie = require('../models/Movie')

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error('Error connecting to mongo', err));

var initCelebs = [
  {
    name: 'Rob Schneider',
    occupation: 'Actor',
    catchPhrase: 'Derp'},
  {
    name: 'Adam Sandler',
    occupation: 'Actor',     
    catchPhrase: 'That Veronica Vaughn is one piece of ace'},
  {
    name: 'Chris Farley', 
    occupation: 'Deceased',  
    catchPhrase: "I live in a van down by the river"}
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
  {
    title: 'Billy Madison',
    genre: 'Comedy',
    plot: 'Man-child Billy Madison goes back to school',
    image: 'https://img07.mgo-images.com/image/thumbnail?id=1MV9639918016c6b8c68c75300fa6f162cd&ql=70&sizes=310x465'},
  {
    title: 'Tommy Boy',
    genre: 'Comedy',  
    plot: 'Dimwitted Tommy Callahan inherits a near-bankrupt automobile parts causing him to hit the road to scare up some new clients',
    image: 'https://images-na.ssl-images-amazon.com/images/I/510ec3CF%2B9L.jpg'},         
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
