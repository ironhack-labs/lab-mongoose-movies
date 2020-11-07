const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.model');
const Movie =require ('../models/Movie.model')


// mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true } ); 

const celebrities = [
 {
     name: "Brad Pitt",
     occupation: "Actor",
     catchPhrase: "Happiness is overrated. There has to be conflict in life."
 },
 {
    name: "Johnny Deep",
    occupation: "Actor",
    catchPhrase: "If someone were to harm my family or a friend or somebody I love, I would eat them. I might end up in jail for 500 years, but I would eat them"
 },
 {
    name: "Jennifer Anniston",
    occupation: "Actress",
    catchPhrase: "The best smell in the world is that man that you love"
 }
]


const movies = [
{
    title: "Figth club" ,
    genre: "Action",
    plot: "The unnamed Narrator is an automobile recall specialist who is unfulfilled by his job and possessions, and suffers from chronic insomnia. He finds catharsis by attending support groups and posing as a sufferer of several diseases, curing his insomnia. His bliss is disturbed when another impostor, Marla Singer, also begins attending the same support groups. The two agree to split which groups they attend."

},
{
   title: "Pirates of the Caribbean" ,
   genre: "Action",
   plot: "In the year 1720, while sailing to Port Royal, Jamaica aboard the HMS Dauntless, Governor Weatherby Swann, his daughter Elizabeth, Joshamee Gibbs, and Lieutenant James Norrington encounter a shipwreck and recover a boy, Will Turner. Elizabeth discovers a golden pirate medallion around his neck, and takes it for herself."

},
{
   title: "Friends" ,
   genre: "Comedy",
   plot: "Ross Geller, Rachel Green, Monica Geller, Joey Tribbiani, Chandler Bing, and Phoebe Buffay are six 20 something year olds living in New York City. Over the course of 10 years, these friends go through family, love, drama, friendship, and comedy."

},


]
// Celebrity.create(celebrities, (err) => {
//     if (err) { throw(err) }
//     console.log(`Created ${celebrities.length} celebrities`)
//     mongoose.connection.close();
//   });


// Movie.create(movies, (err) => {
//     if (err) { throw(err) }
//     console.log(`Created ${movies.length} movies`)
//     mongoose.connection.close();
//   });

 
