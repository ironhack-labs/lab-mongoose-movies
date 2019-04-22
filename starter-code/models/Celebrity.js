// Create the Celebrity model with the schema.
const mongoose = require('mongoose')
const Schema = mongoose.Schema
// Create the celebrity schema with name, occupation and catchPhrase.

const celebritySchema = new Schema({
  name:String,
  occupation: String,
  catchPhrase: String
},{
  timestamps: true,
  versionKey: false
})

// Export the Celebrity model.
module.exports = mongoose.model("Celebrity", celebritySchema)