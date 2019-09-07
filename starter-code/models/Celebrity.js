const { Schema, model } = require('mongoose')

const bookSchema = new Schema(
  { name: String, occupation: String, catchPhrase: String},
  {
    timestamps: {
      createdAt: 'createdAt',
      uptadeAt: 'uptadeAt'
    }
  }
)