const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dbName = 'starter-code';
//mongoose.connect(`mongodb://localhost/${dbName}`, { useNewUrlParser: true, useUnifiedTopology: true } );

const celebritySchema = new Schema({
    name: {type: String},
    occupation: {type: String},
    catchPhrase: {type: String},
});

const Celebrity = mongoose.model("Celebrity", celebritySchema);

module.exports = Celebrity;