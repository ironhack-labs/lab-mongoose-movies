const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase:String 
});


const CelebrityModel = mongoose.model("Celebrity", celebritySchema);

module.exports = CelebrityModel;

