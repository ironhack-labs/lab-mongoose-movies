const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dbzSchema = new Schema({
  name        : {type: String},
  species     : {type: String},
  imgUrl      : {type: String},
  powerLevel  : {type: String},
  catchPhrase : {type: String}
});

const DbzModel = mongoose.model("DbzCharacters", dbzSchema);

module.exports = DbzModel;
