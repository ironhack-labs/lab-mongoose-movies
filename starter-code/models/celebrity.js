const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// esquema de celebrity
const celebritySchema = new Schema({
    name: { type: String, unique: true },
    occupation: { type: String },
    catchPhrase: { type: String },
});

const Celebrity = mongoose.model('Celebrity', celebritySchema);

// Exporta el modelo de celebrity
module.exports = Celebrity;