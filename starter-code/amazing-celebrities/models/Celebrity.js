const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = new Schema ({
  name: String,
  occupation: String,
  catchPhrase: String
});

module.exports = celebritySchema;