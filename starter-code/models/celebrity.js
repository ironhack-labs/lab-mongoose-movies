const mongoose = require("mongoose"); 

const celebritySchema = new mongoose.Schema({
  name: {type: String, require: true}, 
  occupation: String,
  catchPhrase: String, 
})

const CelebrityModel = mongoose.model("celebrities", celebritySchema); 

module.exports = CelebrityModel; 