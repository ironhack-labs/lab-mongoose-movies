const celebrityModel = require("../models/Celebrity");
const mongoose = require("mongoose");
const celebrities = [{
    name: "Bernie Sanders",
    occupation: "US Senator",
    catchPhrase: "Medicare for all!",
},
{
    name: "Donald Trump",
    occupation: "US President",
    catchPhrase: "She's nasty!",
},
{
    name: "Elizabeth Warren",
    occupation: "US Senator",
    catchPhrase: "I have a plan.",
}]

mongoose
  .connect('mongodb://localhost/starter-code', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

celebrityModel.create(celebrities)
    .then(dbRes => {
        console.log("Celebrities Inserted Successfully", dbRes)
    })
    .catch(dbErr => {
        console.log("OH NO!", dbErr);
    })