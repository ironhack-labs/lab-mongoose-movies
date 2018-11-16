const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const CelebritySchema = new Schema({
  name:String,
  occupation:String,
  catchPhrase:{type:String,required:true}
});

module.exports = mongoose.model("Celebrity", CelebritySchema);
