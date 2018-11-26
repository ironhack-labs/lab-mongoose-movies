const mongoose = require('mongoose')
const Schema = mongoose.Schema


const celebritySchema= new Schema({
    name: {
      type:String,
      unique:true
    },
    occupation:{
      type: String,
      enum:['actor', 'singer', 'comedian','unknown']
    },
    catchPhrase:String

},{
  timestamps:{
    updatedAt:true,
    createdAt:true
  }
})

module.exports =mongoose.model('Celebrity',celebritySchema)