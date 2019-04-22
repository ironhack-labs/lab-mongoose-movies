const mongoose = require('mongoose')
const Schema = mongoose.Schema

const celebritySchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    occupation: {
      type: String,
      required: true
    },
    catchPhrase: String
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const Celebrity = mongoose.model('Celebrity', celebritySchema)

module.exports = Celebrity