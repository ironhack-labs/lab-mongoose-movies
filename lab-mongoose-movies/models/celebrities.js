const mongoose = require('mongoose'); //import mongoose

const Schema = mongoose.Schema; //create a schema object with mongoose

const celebritySchema = new Schema({ //define the schema
  name: String,
  occupation: String,
  catchPhrase: String
});

const CelebrityModel = mongoose.model('CelebrityModel', celebritySchema); //create the model with the schema

module.exports = CelebrityModel;
