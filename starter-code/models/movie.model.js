const mongoose = require('mongoose');

module.exports = mongoose.model('Movie', new mongoose.Schema({
    title : String,
    genre : String,
    plot : String
}));