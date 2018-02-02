const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const CelebritieSchema = new Schema({

  name: String,
  occupation: String,
  catchPhrase: String

}
);

const Celebritie = mongoose.model('Celebritie', CelebritieSchema);
module.exports = Celebritie;