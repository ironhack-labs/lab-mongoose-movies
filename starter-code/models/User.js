const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    title: String,
    celebrity: {type: Schema.Types.ObjectId, ref: "Celeb"},
    genre: String,
    plot: String,
})

const User = mongoose.model('User', userSchema)

module.exports = User