const mongoose = require("mongoose")
const Schema = mongoose.Schema

const movieSchema = new Schema({
  celebrity: [{ type: Schema.Types.ObjectId, ref: 'Celebrity' }], // Nombre del modelo: Author
  name: String,
  genre: String,
  plot: String
}, { timestamps: true })

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie