
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
name: String,
occupation: String,
catchPhrase: String
}, { timestamps: true });

const User = mongoose.model("User", userSchema)

module.exports = User