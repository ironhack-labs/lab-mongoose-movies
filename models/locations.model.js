// Iteration #1
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const locationsSchema = new Schema(
  {
    name: String,
    longitude: Number,
    latitude: Number,
    kilometers: Number,
    miles: Number  
  },
  {
    timestamps: true
  }
);

module.exports = model('Locations', locationsSchema);