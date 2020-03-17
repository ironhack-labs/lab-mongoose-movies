const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema(
    {
        title: {type: String, required: true, unique:true },
        genre: {type: String, required: true },
        plot: {type: String, required: true, unique: true }

    },
    {
      timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
      }
    }
  );
  
  const Movie = mongoose.model('Movie', movieSchema);
  
  module.exports = Movie