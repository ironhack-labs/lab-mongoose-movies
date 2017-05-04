//the model is used to set up "document" structure
//and when you create a new entry in the database it will follow the Schema
//defined in this file. So you will need mongoose who helps us with this
//               require the package that lets you manage a mongo db
const mongoose = require('mongoose');

// here you tell the file that you are going to use the Schema class or constructor
//this method comes from mongoose
const Schema = mongoose.Schema;

//in other examples I would include additional Schemas/Models needed in this onError
//so in this case I am going to have celebrities, I should have their movies
//this is the movies model found in the same folder of the celebrities model
const Movies = require('./movie');

// here is where I construct a new celeb
const celebSchema = new Schema ({
  name: {
    type: String,
    required: [true, 'Don\'t you dare try to enter send me a celeb without a name']
  },

  occupation: {
    type: String,
    required: [true, 'Most celebrities are famous because of their occupation, maybe you should put an occupation']
  },

  catchPhrase: {
    type: String,
    default: "Got Em"
  },

  bio: {
    type: String,
    default: `Not to be confused the congressman ${name}` //not sure this will work yet
  },

// The occupation field should be something like...a dropdown menu, and the last field will be
// an array that pulls a certain array/model based on the dropdown's selection
  //------------------------------but for now we will use movies --------------------
  movies: [ Movies.schema ],

  celebImg: {
    type: String,
    default: '/images/celeb.png'
  }

});

//letting the app know that the Celebs const is a mongoose model
//known as Celebs and it uses the celebSchema
const Celebs = mongoose.model('Celebs', celebSchema);

//this is so that you could export the mongoose model
module.exports = Celebs;
