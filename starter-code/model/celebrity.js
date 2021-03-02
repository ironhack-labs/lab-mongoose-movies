const moongoose = require("mongoose");
const Schema = mongoose.Schema;

const CelebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
});

const CelebrityModel = moongoose.model("celebrity", CelebritySchema);
module.exports = CelebrityModel;
