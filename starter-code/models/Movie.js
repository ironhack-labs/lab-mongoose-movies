const {model, Schema} = require('mongoose')

const movieSchema = new Schema(
  {
    title: String,
    genre: String,
    plot : String,
},
{
  timeStamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  }
}
)

module.exports = model('Movie', movieSchema)
