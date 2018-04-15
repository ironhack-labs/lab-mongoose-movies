const mongoose = require("mongoose"); // Importar mongoose
const Schema = mongoose.Schema; // Declarar la variable modelo

const celebritySchema = new Schema({   // Creating the Schema with the properties
    name: String,
    occupation: String,
    catchPhrase:String

})

const Celebrity = mongoose.model("Celebrity", celebritySchema) // Creating the celebrity model

module.exports = Celebrity;   // Exportar el modelo