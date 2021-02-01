const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  // TODO: write the schema
  title: {
    type:String,
    required:true,
    unique:true
  },
  genre: {
    type:String,
    required:true
   
  },
  plot: {
    type:String,
    required:true
  
  },  
  cast: [{type:Schema.Types.ObjectId, ref:'celebrities'}]

});

const Movie= mongoose.model('Movie', movieSchema);

module.exports = Movie;


