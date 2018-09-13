const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

//----------------------------------- movie example
//     title : "Black Panther",
//     genre: "Ryan Coogler",
//     plot: "T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.",
//     image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",

const movieSchema = new Schema({
  creator: String,
  title: String,
  actors: [{type: Schema.Types.ObjectId, ref: "Celebrity"}],
  genre: String,
  plot: String,
  image: String,
  imgName: String,
  imgPath: String
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});


const Movie = mongoose.model("Movie", movieSchema);


module.exports = Movie;