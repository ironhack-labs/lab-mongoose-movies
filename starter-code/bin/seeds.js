const mongoose = require("mongoose");
const Celebrity = require("../models/Celebrity");

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
