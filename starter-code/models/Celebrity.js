let mongoose = require('mongoose')
let Schema = mongoose.Schema

let celebritySchema = new Schema({
  name: String,
  occupation:{
    type:String,
    default: "Unknown"
  },
  catchphrase:{
    type:String,
    required:true
  },
},{timestamps:true})

module.exports = mongoose.model('Celebrity',celebritySchema)