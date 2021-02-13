const mongoose = require("mongoose");
const model = mongoose.model
const Schema = mongoose.Schema
//const { model, Schema } = mongoose;
const UserSchema = new Schema(
    {
        name: {
            type: String,
            required:true
        },
        email: {
            type: String,
            trim: true,
            lowercase: true,
            unique: true,
            required: 'Email address is required',
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        passwordHash:{
            type: String,
            required: [true,"Password is required"]
        }
  })
const Users = model("Users",UserSchema);
module.exports = Users;