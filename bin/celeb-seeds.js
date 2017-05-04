//the seeds file is a way to inject documents into the db
//this file will create 3 celebs that will be part of the the mongoose-movies DB

//the first thing we will need is mongoose so that we could interact with mongo

const mongoose = require('mongoose');

//then we will need to connect mongoose to a db
//this can't overwrite, it will use the db if it exist, or create a new one if not found
mongoose.connect('mongodb://localhost/mongoose-movies');

//we are going to require the model that we want to work with
const Celebs = require('../model/celebrity.js');

//this is an array of celebrities that we want to insert into db
//it has to follow the schema from the model
// name, occupation, catchPhrase, bio, movies celebImg

const celebsSeed = [

{
name: "Rick Sanchez",
occupation: "Scientist",
catchPhrase: "wubalubadubdub",
bio: "",
celebImg: "https://media4.giphy.com/media/QNDDOIJ3oTFYI/giphy.gif"
},

{
name: "Lucas Bros",
occupation: "Bros",
catchPhrase: "Vampire in Brooklyn is an undeniable classic",
bio: "",
celebImg: "https://i.imgur.com/8ZWljxb.gif"
},

{
name: "Patrick Star",
occupation: "Starfish",
catchPhrase: "Is mayonnaise an instrument?",
bio: "",
celebImg: "https://media1.giphy.com/media/l46CyJmS9KUbokzsI/giphy.gif"
}

];

//at this point of the seed file the documents are created and saved into the db
Celebs.create(celebsSeed, (err, celebDocs) => {
  if (err) {
    throw err; //do I went to throw the seeds script? Probably, yes.

  }
  celebDocs.forEach(( unCeleb ) => {
    console.log(`You have successfully added ${ unCeleb.name } ID# ${ unCeleb._id }`);
  }); //end of the forEach loop
}); //end of the doc creation
