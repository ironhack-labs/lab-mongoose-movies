const mongoose = require('mongoose'); // Importar mongoose
const Schema = mongoose.Schema; // Declarar la variable modelo

const celebritySchema = new Schema(
	{
		// Creating the Schema with the properties
		name: String,
		occupation: String,
		catchPhrase: String
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	}
);

const Celebrity = mongoose.model('Celebrity', celebritySchema); // Creating the celebrity model

module.exports = Celebrity; // Exportar el modelo
