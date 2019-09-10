const {Schema, model} = require('mongoose')

const celebritySchema = new Schema(
  {
    name: String,
    occupation: String,
    catchPhrase: String
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    }
  },
  {
    versionKey: false
  }

)

module.exports = model('Celebrity', celebritySchema)


