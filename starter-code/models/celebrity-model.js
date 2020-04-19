const mongoose = require("mongoose")
const Schema = mongoose.Schema

const celebritySchema = new Schema({
  name: String,
  image: {
    type: String,
    default: "https://m.media-amazon.com/images/G/01/imdb/images/nopicture/medium/name-2135195744._CB466677935_.png"
  },
  occupation: String,
  catchPhrase: String
})

const Celebrity = mongoose.model("Celebrity", celebritySchema)

module.exports = Celebrity