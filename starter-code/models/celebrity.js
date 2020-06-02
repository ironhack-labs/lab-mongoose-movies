// models/celebrity.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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


const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;