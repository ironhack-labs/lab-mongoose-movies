const
  mongoose = require(`mongoose`),
  Schema = mongoose.Schema,

  movieSchema = new Schema({
    title: String,
    genre: String,
    plot: String
  })
;

module.exports = mongoose.model(`DEmovie`, movieSchema);