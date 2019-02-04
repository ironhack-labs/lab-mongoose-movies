const mongoose = require("mongoose");
const Schema   = mongoose.Schema;


    const CelebritySchema = new Schema({
        name : String,
        occupation: String,
        catchPhrase: String
    });

    const Celebrity = mongoose.model('celebrity', CelebritySchema);//llamar 'celebrity', es el nombre del coleccion.

module.exports = Celebrity; 