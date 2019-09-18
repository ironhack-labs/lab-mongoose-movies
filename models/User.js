const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: String,
  password: String,
  image: String,
  // friends: [ { type : Schema.Types.ObjectId, ref: 'Celebrity' } ]
})

const User = mongoose.model("User", userSchema)

module.exports = User;