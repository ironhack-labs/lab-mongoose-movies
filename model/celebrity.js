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
const Movies = require('./movies');

// here is where I construct a new celeb
const celebSchema = new Schema ({
  
})
