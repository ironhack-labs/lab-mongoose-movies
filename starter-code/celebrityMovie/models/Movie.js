const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema ({
    name:String,
    genre:String,
    plot: String
})

//Modelo con Schema
module.exports = mongoose.model("Movie", movieSchema);