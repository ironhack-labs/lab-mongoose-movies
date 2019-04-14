const Movie = require('../models/Movie');

module.exports = {
  getMovies(){
    return Movie.find({});
  },
  getMovieById(id){
    return Movie.findById(id);
  },
  createMovie(obj){
    // ¿Se podría inyectar un campo arbitrario?
    // Respuesta: NO -> Solo acepta los campos que aparecen en el modelo. Tampoco aparece ningún error
    return Movie.create({...obj});
  },
  deleteById(id){
    return Movie.findByIdAndRemove(id);
  }
};