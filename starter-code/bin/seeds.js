const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");
const Movie = require("../models/Movie");

mongoose
  .connect("mongodb://localhost/CelebMovies", { useNewUrlParser: true })
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error("Error connecting to mongo", err));

Celebrity.deleteMany()
.then(()=>{
  const celebs = [
    {
      name: `Aaron Rodgers`,
      occupation: `Athlete`,
      catchPhrase:  `"I feel like I've set the bar fairly high, and I want to keep living up to that bar."` 
    },
    {
      name: `Chris Pratt`,
      occupation: `Actor`,
      catchPhrase: `"My favorite way to blow off steam is to sing obnoxiously loud in the shower."`
    },
    {
      name: `Colin Firth`,
      occupation: `Actor`,
      catchPhrase: `Harry Hart:"Manners - maketh - man. Do you know what that means? Then let me teach you a lesson."`
    }
  ];

  Celebrity.insertMany(celebs)
});
Movie.deleteMany()
.then(()=>{
  const movies = [
    {
      title: `Guardians of the Galaxy`,
      genre: `Fictional superhero team`,
      plot: `Peter Quill forms an uneasy alliance with a group of extraterrestrial criminals who are on the run after stealing a powerful artifact.`
    },
    {
      title: `Kingsman: The Secret Service`,
      genre: `Action spy comedy`,
      plot: `Follows the recruitment and training of Gary "Eggsy" Unwin, into a secret spy organisation.`
    },
    {
      title: `Cousinhood`,
      genre: `Comedy`,
      plot: `When Diego is abandoned by his girlfriend a day before their wedding, he decides to go with his two cousins to the village where they used to go on vacation when they were children to recuperate Diego's first love: Martina).`
    }

  ];

  Movie.insertMany(movies)
});
