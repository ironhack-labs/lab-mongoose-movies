const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`); */

const celebSchema = new Schema({
  name: String,
  occupation: String,
  catchPhrase: String
},{
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
});

const Celebrity = mongoose.model("Celebrity",celebSchema);

module.exports = Celebrity;