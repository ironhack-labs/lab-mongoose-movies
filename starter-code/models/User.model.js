const mongoose = require("mongoose");
const Movie = require("../models/Movie.model");
const Celebrity = require("../models/Celebrity.model");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    userName: { type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: true},
  },
  {
    toJSON: { virtuals: true },
  }
);

userSchema.virtual("celebrities", {
  ref: "Celebrity",
  foreignField: "user",
  localField: "_id",
});

userSchema.virtual("movies", {
  ref: "Movie",
  foreignField: "user",
  localField: "_id"
})

const User = mongoose.model("User", userSchema);

module.exports = User;
