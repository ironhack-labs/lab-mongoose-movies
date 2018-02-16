const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const celebritySchema = new Schema ({
    name:String,
    occupation:String,
    catchPhrase: String
})

//Modelo con Schema
module.exports = mongoose.model("Celebrity", celebritySchema);