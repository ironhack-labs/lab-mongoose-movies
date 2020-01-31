const { model, Schema } = require('mongoose')
const celebritySchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
},{
  timestamps: true,
  versionKey: false
})

module.exports = model('Celebrity', celebritySchema)