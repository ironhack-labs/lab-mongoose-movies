const { model , Schema } = require("mongoose")

const celebritySchema = new Schema(
    {
      name: String,
      occupation: {
        type: String,
        enum: ['cantante', 'Actor', 'No encontrado', 'Comediante']
      },
      catchPhrase: String
    }
  )
  
  module.exports = model('Celebrity', celebritySchema)