const mongoose = require('mongoose');
require("../app.js")
//const Celebrity = require('../models/celebrity');
const Movie = require('../models/Movie.js');


// const celebrities = [
//     {
//       name: "Bianca del Rio",
//       occupation: "Season 6 winner",
//       catchPhrase: "Not today, Satan",
//     },
//     {
//       name: "Shangela",
//       occupation: "Runner up",
//       catchPhrase: "Halelloo",
//     },
//     {
//       name: "Valentina",
//       occupation: "Model",
//       catchPhrase: "I'd like to keep it on, please",
//       }
  
//   ]

const movies = [
    {
        title: 'Hurricane Bianca', 
        genre: 'Comedy',
        plot: 'A school teacher named Richard moves from New York City to a small town in Texas, and begins work at a new school.Shortly after this, Richard gets outed by the community in this town and is consequently fired, which is legal under state law in Texas. Following this, Richard feels the need to get revenge on the people that were hateful to him, so he returns as Bianca Del Rio, his drag persona, and spreads his hate and causes mayhem to those that were mean to him, who are oblivious to the fact that Del Rio is actually the previously fired Richard..'
    },
    {
        title: 'Hurricane Bianca II, from Russia with hate', 
        genre: 'Comedy',
        plot: 'Deborah Ward has just been released from prison, and immediately plans to get her revenge on Richard Martinez, aka Bianca Del Rio. Deborah tricks Richard into going to Russia in hopes of getting him arrested. But when Deborahs daughter Carly and Richards slightly mentally ill friend Rex are arrested and sent to a gulag Deborah and Richard must put their differences aside and rescue their loved ones..'
    },
    {
        title: 'Paris is Burning', 
        genre: 'Documentary',
        plot: "Filmed in the mid-to-late 1980s, it chronicles the ball culture of New York City and the African-American, Latino, gay, and transgender communities involved in it. Critics consider the film to be an invaluable documentary of the end of the Golden Age of New York City drag balls, and a thoughtful exploration of race, class, gender, and sexuality in America."
    }
  ];

//   Celebrity.deleteMany({})
//   .then(() => Celebrity.create(celebrities))
//   .then((celebrities) => console.log("Added Celebrities Successfully.", celebrities))
//   .catch((error) => console.log(error))

  Movie.deleteMany({})
  .then(() => Movie.create(movies))
  .then(movies => console.log(`Movies added to the database`, movies))
  .catch(e => console.log('Error: ', e))

  