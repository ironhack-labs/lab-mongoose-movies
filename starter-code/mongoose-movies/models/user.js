'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  stars: [{ type: Schema.Types.ObjectId }],
  location: { type: { type: String }, coordinates: [Number] }
});

userSchema.index({ location: '2dsphere' });

const User = mongoose.model('User', userSchema);

module.exports = User;
