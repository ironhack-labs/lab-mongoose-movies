const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

const dbName = 'mongoose-movies';
mongoose.connect(`mongodb://127.0.0.1/${dbName}`);

const celebs = [{
  name: 'Tom Cruise',
  occupation: 'Actor',
  catchPhrase: 'Gooooo Scientology!'
},
{
  name: 'Beyoncé',
  occupation: 'Musician',
  catchPhrase: 'Flawless'
},
{
  name: 'Neko Case',
  occupation: 'Musician',
  catchPhrase: "my courage is roaring like the sound of the sun / 'Cause it's vain about its mane and will reveal them to no one / I'm an animal, you're an animal, too"
}];

let promiseA = Celebrity.create(celebs, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${celebs.length} celebrities`)
});

const movies = [{
  title: 'The Godfather',
  genre: 'Drama',
  plot: 'A man and his friends hang out together and chase money and one becomes THE GODFATHER and there is lots of death and shooting and many mafia things',
  pictureUrl: '',
}, 
{
  title: '12 Angry Men',
  genre: 'Drama',
  plot: 'Jurors argue in a court case, really this should be called 12 Angry Jurors or something (such patriarchy, OMG, it is 2019 guys)'
}];

let promiseB = Movie.create(movies)
.then(movies => console.log("Movies successfully created: ", movies.length))
.catch(err => console.log("error creating movies: ", err));

Promise.all([promiseA, promiseB]).then(values => {
  console.log(values);
  mongoose.connection.close();
}).catch(err => console.log("error fulfilling all promises°! ", err)); 