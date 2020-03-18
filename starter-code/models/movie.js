const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    genre: { type: String, required: true },
    plot: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

//Define the model of the schema
const Movie = mongoose.model("Movie", movieSchema);

//Export the model
module.exports = Movie; 