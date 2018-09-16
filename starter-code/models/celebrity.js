const mangoose = require('mangoose');
const Schema = mangoose.Schema;

const celebritySchema = new Schema({
  name: {type: String, unique: true},
  occupation: String,
  catchPhrase: String
});

const Celebrity = mangoose.model("Celebrity", celebritySchema);

module.exports = Celebrity;