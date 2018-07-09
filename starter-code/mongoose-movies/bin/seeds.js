const mongoose = require('mongoose');
const Celebrity = require('../models/celebrity');
const Movie = require('../models/movie');

// thisll be how we connect our DB, so make sure the name is correct. Save yourself
//the headache.
const dbName = 'mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`);

const celebrities = [
  {
    name: "John Krasinski",
    occupation: "Actor",
    catchPhrase: "stares at camera"
  },
  {
    name: "Arnold Schwarzenegger",
    occupation: "Former Governor",
    catchPhrase: "Hasta La Vista Baby"
  },
  {
    name: "Tony Hawk",
    occupation: "Skateboarder",
    catchPhrase: "Look at me im on a skateboard"
  }
];

const movies = [
  {
    title: "BraveHeart",
    genre: "great",
    plot: "manly men fight"
  },
  {
    title: "BraveHeart 2",
    genre: "great",
    plot: "manly men fight again"
  },{
    title: "BraveHeart 3 the finale",
    genre: "great",
    plot: "manly men fight one last time....maybe"
  },
];

Movie.create(movies)
.then((result)=>{
  console.log(`created ${result.length} movies`);
})
.catch((err)=>{
  console.log(err);
});

Celebrity.create(celebrities)
.then((result)=>{
  console.log(`created ${result.length} celebrities`);
})
.catch((err)=>{
  console.log(err);
});
