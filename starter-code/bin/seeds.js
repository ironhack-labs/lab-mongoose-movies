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
    catchPhrase: 'Derp',
    mugshot: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlCdXQwFTkCn3_iboUSFnqjeO6nNW5oDUhFotFDdog-fXrN4Yx'},
  {
    name: 'Adam Sandler',
    occupation: 'Actor',     
    catchPhrase: 'That Veronica Vaughn is one piece of ace',
    mugshot: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUXOrI8DPIgDq2z2tqpP4-azrr3tBOjlYP31pIAbaoUAKNQUcEtw'},
  {
    name: 'Chris Farley', 
    occupation: 'Deceased',  
    catchPhrase: "I live in a van down by the river",
    mugshot: 'https://www.secondcity.com/wp-content/uploads/2014/09/SC_Alumni_Farley_Chris_600x600_001.jpg'},
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
    image: 'https://i.etsystatic.com/8629616/r/il/406461/1087159436/il_570xN.1087159436_fifg.jpg'},
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
