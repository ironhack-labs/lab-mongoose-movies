const mongoose = require('mongoose');
// const express  = require('express');
const Schema   = mongoose.Schema;

const celebritySchema = new Schema ({
  name: String,
  occupation: String,
  catchPhrase: String
});


const  celeb = mongoose.model('celebrity', celebritySchema);
module.exports = celeb;