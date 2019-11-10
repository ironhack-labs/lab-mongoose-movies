const mongoose = require('mongoose'); // import mongoose dependencies

const Schema = mongoose.Schema;

const celebritiesSchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
});

const celebrityModel = mongoose.model("Celebrity", celebritiesSchema); // name of mongoose model
// a "Celebrity" collection is created when inserting first element in the db
//console.log("in the Celebrities.js file !");

module.exports = celebrityModel;