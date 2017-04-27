// models/chat-message.js
const mongoose = require('mongoose');
const fakegoose = require('fakegoose');

const Schema = mongoose.Schema;

const CelebritySchema = new Schema({
  name: {
    type: String,
    fake: 'name.firstName',
    required: [true, 'Please enter the celebrity\'s name'],
  },
  occupation: {
    type: String,
    fake: 'name.firstName',
  },
  catchPhrase: {
    type: String,
    fake: 'name.firstName',
  },
});

CelebritySchema.plugin(fakegoose);
module.exports = mongoose.model('Celebrity', CelebritySchema);

// fakegoose fakegoose-celebrity.js --count 10 --seed mongodb://localhost:27017/mongoose-movies
