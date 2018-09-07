const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

//----------------------------------- movie example
//     title : "Black Panther",
//     director: "Ryan Coogler",
//     stars: ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"],
//     image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
//     description: "T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.",
//     showtimes: ["13:50", "16:20", "19:20", "22:10"]

const movieSchema = new Schema({
  title: String,
  director: String,
  stars: Array,
  image: String,
  description: String,
  showtimes: Array
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});


const Movie = mongoose.model("Movie", movieSchema);


module.exports = Movie;