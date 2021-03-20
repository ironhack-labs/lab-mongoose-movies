const { model, Schema } = require('mongoose');

const celebritySchema = new Schema(
  {
    name: { type: String, required: true },
    occupation: { type: String },
    catchPhrase: { type: String },
  },
  { timestamps: true }
);

const Celebrity = model('Celebrity', celebritySchema);

module.exports = Celebrity;
