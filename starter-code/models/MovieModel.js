const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
//second object is the objext with the options
const movieSchema = new Schema ({
    title: {type: String, required:true, unique:true},
    genre: String,
    plot: String
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
    }  
})

//create model

const Movie = mongoose.model("Movie", movieSchema)

// export model

module.exports = Movie;