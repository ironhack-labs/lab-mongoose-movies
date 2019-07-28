//Mongoose model (schema) that define the data with which we work. These models will interact with the data and work with it while having a validation in place that define how the data should look like. Blueprint of each new entry of data that we enter on the database. This is just a blueprint, this is not what we are going to use in our app. In our app we will use MODELS, which in turn are based on this SCHEMA "blueprint"

//!Import mongoose
const mongoose = require("mongoose");

//!Create Schema
const Schema = mongoose.Schema; // create Schema

//!Import mongoose
const celebritySchema = new Schema( // we define how the data we work with should look like
  {
    name: String,
    occupation: String,
    catchphrase: String
  },
  { timestamps: true }
);

//!Import mongoose
const Celebrity = mongoose.model("Celebrity", celebritySchema); // first parameter: name of the model, second parameter: the schema on which the model is based

//!Import mongoose
module.exports = Celebrity;
