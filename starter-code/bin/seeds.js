const mongoose = require("mongoose");

function dbConnect(cb) {
  mongoose
    .connect("mongodb://localhost/celemovies", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(x => {
      console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
      cb();
    })
    .catch(err => {
      console.error("Error connecting to mongo", err);
    });
}

dbConnect(() => {

  const Celebrities = require("../models/Celebrities");
 
  const celebrities = [
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
  
  Celebrities.deleteMany()
  .then(() => {
    return Celebrities.create(celebrities);
  })
  .then(() => {
    console.log("succesfully added all the data");
    mongoose.connection.close();
    process.exit(0);
  });
});