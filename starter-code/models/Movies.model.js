// models/Book.model.js

const mongoose = require('mongoose');
const {
    Schema,
    model
} = mongoose;

const celebritySchema = new Schema({
    title: String,
    genre: String,
    plot: String,

});

module.exports = model('Movies', celebritySchema);
