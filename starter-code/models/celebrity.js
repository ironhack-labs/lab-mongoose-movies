// const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const celebSchema= new Schema({
        name: String,
        occupation: String,
        catchPhtase:String,
});
// module.exports = model('Movie', movieSchema);
const Celebrity = mongoose.model('Celebrity', celebSchema);
module.exports = Celebrity;