  const {
    model,
    Schema
  } = require("mongoose")

  const celebSchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String
  }, {
    timestamps: true,
  })


  module.exports = model('Celebrity', celebSchema)