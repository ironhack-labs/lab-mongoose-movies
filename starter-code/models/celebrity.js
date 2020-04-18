const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = new Schema(
  {
    name: String,
    ocupation: String,
    catchPrase: String
  },
  {
    timestamps: {
      cratedAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);

const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;