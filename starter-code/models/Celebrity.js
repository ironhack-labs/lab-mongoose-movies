const { Schema, model } = require('mongoose');

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
  }
);

module.exports = model('Celebrity', celebritySchema);
