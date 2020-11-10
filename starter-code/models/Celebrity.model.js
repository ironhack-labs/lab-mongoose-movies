const mongoose = require('mongoose');
const { Schema, model } = mongoose;
 
const celebrityModel = new Schema(
  {
    name: String, enum : ['Tom Cruise','Beyonce', 'Daffy Duck'],
    ococcupation: String, enum : ['actor','singer', 'comedian','unknown'],
    catchPhrase: String
  },

);
 
module.exports = model('Celebrity', celebrityModel);