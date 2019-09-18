const mongoose = require('mongoose')
const Schema = mongoose.Schema


const UserSchema = Schema({
    username: { type: String, unique: true },
    password: { type: String },
})

const User = mongoose.model('User', UserSchema)
module.exports = User