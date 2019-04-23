const mongoose = require('mongoose')
const Schema = mongoose.Schema

const celebritySchema = new Schema({
    name: String,
    occupation: String, 
    catchPhrase: String  
},
{
    timestamps: true,
    versionKey: false
  }
)

module.exports = mongoose.model('Celebrity', celebritySchema)
