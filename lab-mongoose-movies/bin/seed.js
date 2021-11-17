const mongoose = require("mongoose");

const CelebrityModel = require("../models/celebrity.js");

mongoose.Promise = Promise;
mongoose
  .connect('mongodb://localhost/lab-mongoose-movies', {useMongoClient: true})
  .then(() => {
    console.log('Connected to Mongo!')
  }).catch(err => {
    console.error('Error connecting to mongo', err)
  });


const celebrityData = [
    {
    name: "Docteur Chen",
    occupation: "Plastic Surgeon",
    catchPhrase: "Plastic is fantastic"
    },
    {
    name: "The Knife",
    occupation: "Cook",
    catchPhrase: "Fat is flav"
    },
    {
    name: "Lady Vocal Cord" ,
    occupation:"Singer",
    catchPhrase: "Playback is the new black"
    }
]

CelebrityModel.create(celebrityData)
.then(celebrityResults => {
    console.log("CELEBRITIES ADDED");
})
.catch(err => {
    console.log("CELEBRITY FAILURE", err)
});