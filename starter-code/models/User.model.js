const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true
    },
    // email: {
    //   type: String,
    //   required: true
    // },
    // add password property here
    passwordHash: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = model('User', userSchema);