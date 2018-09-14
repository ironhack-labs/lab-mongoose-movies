const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

//----------------------------------- Celebrity Example
//     name : "Cris Rock",
//     occupation: "Actor",
//     catchPhrase: "every celebrity needs a good catch phrase",
//     image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",

const celebSchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String,
  movies: [{type: Schema.Types.ObjectId, ref: "Movie"}],
  image: String
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});


const Celebrity = mongoose.model("Celebrity", celebSchema);


module.exports = Celebrity;