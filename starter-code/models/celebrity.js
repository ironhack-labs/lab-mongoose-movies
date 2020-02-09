const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const { name, occupation, catchPhrase} = req.body;
const schemaName = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
});
const Celebrity = mongoose.model("celebrity", schemaName);
module.exports = Celebrity;