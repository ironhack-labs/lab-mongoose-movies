const mongoose = require('mongoose')
const Schema = mongoose.Schema


const UserSchema = Schema({
    username: { type: String, unique: true, required: true },
    password: { type: String },
    role: { type: String, enum: ['Admin', 'User', 'Guest'] },
    googleID: String,
    image: String,
    email: String,
})

const User = mongoose.model('User', UserSchema)
module.exports = User