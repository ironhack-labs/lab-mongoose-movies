const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

// thisll be how we connect our DB, so make sure the name is correct. Save yourself
//the headache.
const dbName = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const devito = {_id: new mongoose.Types.ObjectId(), name: "Danny", lastName: "Devito", nationality: "Mongolia", birthday: "01/04/2030"};
const carell = {_id: new mongoose.Types.ObjectId(), name: "Steve", lastName: "Carell", nationality: "Chinese", birthday: "04/03/1994"};

const celebrities = [devito, carell];

const movies = [
  {
    title: "Matilda",
    genre: "Family",
    celebrity: devito._id,
    plot: "Story of a wonderful little girl, who happens to be a genius, and her wonderful teacher vs. the worst parents ever and the worst school principal imaginable."
  },
  {
    title: "Twins",
    genre: "Comedy",
    celebrity: devito._id,
    plot: "A physically perfect but innocent man goes in search of his long-lost twin brother, who is short, a womanizer, and small-time crook."
  },
  {
    title: "Despicable Me",
    genre: "Family",
    celebrity: carell._id,
    plot: "When a criminal mastermind uses a trio of orphan girls as pawns for a grand scheme, he finds their love is profoundly changing him for the better"
  },
  {
    title: "The 40-year old Virgin",
    genre: "Comedy",
    celebrity: carell._id,
    plot: "Goaded by his buddies, a nerdy guy who's never 'done the deed' only finds the pressure mounting when he meets a single mother."
  }

];

Celebrity.create(celebrities)
.then((response)=>{
  console.log(`created ${response.length} celebrities`);

  Movie.create(movies)
  .then((result)=>{
    console.log(`created ${result.length} movies`);
  })
  .catch((err)=>{
    console.log(err);
  });

})
  .catch((err)=>{
    console.log('Error', err);
  });



// const celebrities = [
//   {
//     name: "John Krasinski",
//     occupation: "Actor",
//     catchPhrase: "stares at camera"
//   },
//   {
//     name: "Arnold Schwarzenegger",
//     occupation: "Former Governor",
//     catchPhrase: "Hasta La Vista Baby"
//   },
//   {
//     name: "Tony Hawk",
//     occupation: "Skateboarder",
//     catchPhrase: "Look at me im on a skateboard"
//   }
// ];
//
// const movies = [
//   {
//     title: "BraveHeart",
//     genre: "great",
//     plot: "manly men fight"
//   },
//   {
//     title: "BraveHeart 2",
//     genre: "great",
//     plot: "manly men fight again"
//   },{
//     title: "BraveHeart 3 the finale",
//     genre: "great",
//     plot: "manly men fight one last time....maybe"
//   },
// ];

// Movie.create(movies)
// .then((result)=>{
//   console.log(`created ${result.length} movies`);
// })
// .catch((err)=>{
//   console.log(err);
// });

// Celebrity.create(celebrities)
// .then((result)=>{
//   console.log(`created ${result.length} celebrities`);
// })
// .catch((err)=>{
//   console.log(err);
// });
