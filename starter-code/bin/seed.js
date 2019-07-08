// const mongoose =  require("mongoose");
// const Celebrity = require('../models/celebrity');

// const dbName = 'celebrity-lab';
// mongoose.connect(`mongodb://localhost/${dbName}`, {useNewUrlParser: true});

// const celebData = [
//   {
//     name: 'Al Gore',
//     occupation: 'hunter of ManBearPig',
//     catchPhrase: "I'm super ceral"
//   },
//   {
//     name: 'Jesus Christ',
//     occupation: 'Savior of all',
//     catchPhrase: 'The power of Christ compells you!'
//   },
//   {
//     name: 'Mr. Hankey',
//     occupation: 'christmas deity',
//     catchPhrase: 'Hooooowdyho'
//   }
// ];

// Celebrity.create(celebData, (err) => {
//   if (err) { throw(err) }
//   console.log(`Created ${celebData.length} new celebrities`)
//   mongoose.connection.close();
// });

const mongoose =  require("mongoose");
const Movies = require('../models/movies');

const dbName = 'celebrity-lab';
mongoose.connect(`mongodb://localhost/${dbName}`, {useNewUrlParser: true});

const moviesData = [
  {
    title: 'Sharknado',
    genre: 'Terror/Comedy',
    plot: 'sharks, hurricanes, disaster.' 
  },
  {
    title: 'The Room',
    genre: 'Romance/Comedy',
    plot: 'romance, awkwardness, great.' 
  },
  {
    title: 'The Giant Claw',
    genre: 'Sci-fi',
    plot: 'giant claw from parallel dimension atacking earth' 
  }
];

Movies.create(moviesData, (err) => {
  if (err) { throw(err) }
  console.log(`Created ${moviesData.length} new movies`)
  mongoose.connection.close();
});