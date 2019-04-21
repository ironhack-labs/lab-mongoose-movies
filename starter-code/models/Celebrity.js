const mongoose = require('mongoose')
const Schema = mongoose.Schema

const celebritySchema = new Schema ({
  name: String,
  ocupation: String,
  catchPhrase: String,
  image: String
},
{
  timestamps:true,
  versionKey:false
})

module.exports = mongoose.model('Celebrity', celebritySchema)