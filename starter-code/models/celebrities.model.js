var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var celebritiesSchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
});

const celebritiesModel = mongoose.model("celebrities", celebritiesSchema);

module.exports = celebritiesModel;
