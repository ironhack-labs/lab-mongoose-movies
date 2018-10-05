const
  mongoose = require(`mongoose`),
  Schema = mongoose.Schema,

  celebritySchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String
  })
;

module.exports = mongoose.model(`Celebrity`, celebritySchema);