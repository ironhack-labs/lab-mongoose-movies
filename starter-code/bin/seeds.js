require('dotenv').config();

const mongoose =  require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');



mongoose.connect(process.env.DBURL, {useNewUrlParser: true})
  .then(() => console.log("Connected!"));

const celebs = [
  {
    name:"Gillian Anderson",
    occupation:"Actress",
    catchPhrase:"Just remember, you can do anything you set your mind to, but it takes action, perseverance, and facing your fears."
  },
  {
    name:"Meryl Streep",
    occupation:"Actress",
    catchPhrase:"The interesting thing about being a mother is that everyone wants pets, but no one but me cleans the kitty litter."
  },
  {
    name:"Julianne Moore",
    occupation:"Actress",
    catchPhrase:"People think that the directors direct actors. No. Really, what the director's doing is directing the audience's eye through the film."
  }
]



Celebrity.collection.drop();

Celebrity.create(celebs)
  .then(celebs => {
    console.log(`Created ${celebs.length} celebs!`);
  })
    .then(() => {mongoose.disconnect()});
