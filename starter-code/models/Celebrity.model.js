const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = new Schema({
    name: { type: String, required: true},
    occupation: { type: String, enum: ['actor', 'singer', 'comedian', 'unknown'] },
    catchPhrase: { type: String, maxlength: 250 }
})
//parametros nombre modelo, nombreSchema
const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;

