const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: [true, 'Email is required.'],
            match: [
                    /^\S+@\S+\.\S+$/, 
                    'Please use a valid email address.'],
            unique: true,
            lowercase: true,
            trim: true
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = model('User', userSchema);