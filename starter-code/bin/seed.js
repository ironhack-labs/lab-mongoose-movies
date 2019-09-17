const path = require('path');
require('dotenv').config();

const mongoose = require('mongoose');
const Celebrity = require("../models/Celebrity")
const Movie = require("../models/Movie")

// const celebSeed = [
//   {
//     name: "CelebDog",
//     occupation: "Actor",
//     catchPhrase: "Woof"
//   },

//   {
//     name: "CelebCat",
//     occupation: "Actor",
//     catchPhrase: "Meow"
//   },

//   {
//     name: "CelebHamster",
//     occupation: "Comedian",
//     catchPhrase: "*Squeak*"
//   },

// ]

const movieSeed = [
  {
    title: "A Man's Best Friend",
    genre: "Wholesome",
    plot: "Documentary following the journey of Alex and Doge."
  },

  {
    title: "Cat in the Dessert",
    genre: "Sci-Fi",
    plot: "Sand storms have been frequent in Egypt.  Is there a correlation between the storms and the mysterious new inhabitants?"
  },

  {
    title: "Wonder Mouse",
    genre: "Cartoon",
    plot: "A magician's mouse is entrusted with a powerful wand.  Will he be able to resist temptation?"
  },

]

mongoose
  .connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)

    // Celebrity.insertMany(celebSeed)
    //   .then(res => {
    //     console.log("Successfully seeded database");
    //   })
    //   .catch(err => console.error(err));

    Movie.insertMany(movieSeed)
      .then(res => {
        console.log("Successfully seeded database");
      })
      .catch(err => console.error(err));
  })
    
  .catch(err => console.error('Error connecting to mongo', err));

// mongoose.connection.close()
//   .then(res=>{
//     console.log("Successfully closed DB")
//   })
//   .catch(err => console.error(err))