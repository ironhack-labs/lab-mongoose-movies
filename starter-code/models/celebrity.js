const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = newSchema(
    {
        name: String,
        occupation: String,
        catchPhase: String

    }
);

const Celebrity = mongoose.model('Celebrity', celebritySchema);
module.exports = Celebrity;