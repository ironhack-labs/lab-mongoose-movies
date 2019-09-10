const {model, Schema} = require('mongoose')

const celebritySchema = new Schema(
  {
    name: String,
    occupation: {
      type: String,
      enum: ['Actor', 'Singer', 'Comedian', 'Unknown']
    },
    catchPhrase : String,
},
{
  timeStamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
}
)

module.exports = model('Celebrity', celebritySchema)
