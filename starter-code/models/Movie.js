const mongoose = require("mongoose");
const Schema = mongoose.Schema;

movieSchema = new Schema({
    title: String, 
    genre: String, 
    plot:  String
},
{ timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at"
      }
    });

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;