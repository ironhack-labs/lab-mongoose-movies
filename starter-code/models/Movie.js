const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CelebrityModel = require("./Celebrity")

const MovieSchema = new Schema({
    title : String,
    genre : String, 
    plot : String, 
    cast : [{ type: Schema.Types.ObjectId, ref: "celebrity"}]
      
})

// [{ type: Schema.Types.ObjectId, ref: "cast" }]

const MovieModel = mongoose.model("movie", MovieSchema);

module.exports = MovieModel;