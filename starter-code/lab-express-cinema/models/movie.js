const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
/*const data = require('../bin/seeds.js'); /*<-- esto no es necesario porque al seeds.js le pasas el modelo y ya toma esta informacion,
 el modelo no necesita la informacion de seeds.js. En terminos simples ya el modelo fue a la casa de seeds, no es necesario que seeds vaya a la casa del modelo si el modelo ya esta alla */

/*
 lo que si debes hacer siempre es que si necesitas pasar informacion a otro archivo debes hacer el export, 
como si avisaras que ya vas saliendo para el sitio y en el archivo que va a recibir la informacion, haces el require
*/
//CREATE A NEW MONGO SCHEMA WITH MONGOOSE
const movieSchema = new Schema({
  title :String,
  director :String,
  stars : [String],
  image :String,
  description : String,
  showtimes:  [String]
});

// modifique los tipos en el esquema, no es necesario escribir 'type', una vez lo hicieron en la clase para evitar un problema con una cosa muy especifica, pero asi como lo puse funciona bien


//CREATE A NEW MONGOOSE MODEL USING THE SCHEMA CREATED BEFORE
let Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;

