const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },
    password: {
        type: String,
        minlength: 8,
        required: true
    } 
}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema)

module.exports = User