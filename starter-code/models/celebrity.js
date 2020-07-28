// requerimos mongoose.
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// creamos el modelo de nuestro schema para celebs.
const celebritySchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String
})

const Celebrity = mongoose.model('Celebrity', celebritySchema)

module.exports = Celebrity;