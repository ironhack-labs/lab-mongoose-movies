const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// // planing how the Celebritie document should like like, before database insertion
const celebrityModel = new Schema ({
  name: String,
  occupation: String,
  cathPhrase: String,
});

// // use the schema (the plan) to generate a model
// // the model will grant you access to a bunch a methods
// // to ... C.R.U.D !!!
const CelebrityModel = mongoose.model("celebrities", celebrityModel);


module.exports = CelebrityModel;