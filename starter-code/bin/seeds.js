//Create an array of 3 objects, each with name, occupation and catchPhrase for our initial celebrities.
//Call the Celebrity model's create method with the array as argument.
//In the create method's callback, display feedback.
/*
const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
 
const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbName}`);


const celebrities = [{
    name: "Beyonce",
    occupation: "Singer",
    catchPhrase: "All the single ladies!"
},
{
    name: "Nathy Peluso",
    occupation: "Singer",
    catchPhrase: "La Sandunguera!"
},
{
    name: "Rosalía",
    occupation: "Singer",
    catchPhrase: "Trá-trá!"
}]


Celebrity.create(celebrities, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${celebrities.length} celebrities`)
    mongoose.connection.close();
  });
*/

const mongoose = require('mongoose');
const Movie = require('../models/Movie');
 
const dbName = 'starter-code';
mongoose.connect(`mongodb://localhost/${dbName}`);


const movies = [{
    title: "Titanic",
    genre: "Drama",
    plot: "Titanic is a ship that crosses the Atlantic and crashes into an inceberg, so it sinks"
},
{
    title: "The Beach",
    genre: "Drama",
    plot: "A group of young travellers discover a forbidden island and they almost die"
},
{
    title: "The talented Mr Ripley",
    genre: "Drama",
    plot: "A young boy lies about himself to live a live that it's not his own"
}]


Movie.create(movies, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${movies.length} movies`)
    mongoose.connection.close();
  });