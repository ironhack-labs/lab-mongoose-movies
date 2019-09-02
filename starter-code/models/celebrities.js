const mongoose = require ("mongoose");
const schema = mongoose.Schema;

const celebritiesSchema = new schema ({
  name: String,
  occupation: {type: String, enum:["actor", "singer","comedian","unknown"]},
  catchPhrase : String
});

const celebritiesModel = mongoose.model("celebrities", celebritiesSchema);

module.exports = celebritiesModel;