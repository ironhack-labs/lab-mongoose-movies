const {model, Schema} = require('mongoose')

const celebritySchema = new Schema(
    {
     name:{
         type: String,
     },
     occupation:{
         type: String,
         enum: ['actor', 'singer', 'comedian', 'unknown']
     },
     catchPhrase:{
         type: String
     }
    })

module.exports = model('Celebrity', celebritySchema)