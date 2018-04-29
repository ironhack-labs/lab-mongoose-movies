const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/celebrity')
const Schema = mongoose.Schema;

const celebSchema = new Schema({
  name    : String,
  occupation     : String,
  catchphrase : String,

});

const Celeb = mongoose.model('Celeb', celebSchema);



module.exports = Celeb;