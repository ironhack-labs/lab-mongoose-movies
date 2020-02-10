const { model, Schema } = require('mongoose')

const celebritySchema = new Schema (
  {
    name: String,
    occupation: {
      type: String,
      enum: ['writer', 'actor', 'singer', 'unknown']
    },
    catchPhrase: String
  }
)

module.exports = model('Celebrities', celebritySchema)
