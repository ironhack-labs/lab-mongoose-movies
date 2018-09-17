const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const actorSchema = new Schema({
    _celebrity: Array,
    _movies: Array,
});

const Actor = mongoose.model('Actor', actorSchema);
module.exports = Actor;