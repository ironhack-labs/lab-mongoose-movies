const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const model = mongoose.model;

const userSchema = new Schema (
    {
        email: {
          match: [/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, 'Please enter a valid E-mail.'],
          type: String,
          trim: true,
          required: [true, 'Email is required.'],
          unique: true,
        },
        password: {
          type: String,
          required: [true, 'Password is required.']
        }
      },
      {
        timestamps: true
      }
);

module.exports = model("User", userSchema);
