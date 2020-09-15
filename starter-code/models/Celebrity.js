const mongoose = require('mongoose');

const { Schema } = mongoose;

const celebritySchema = new Schema({
    name: {type: String, rquired: true},
    occupation: {type: String, rquired: true, enum: ['actor','singer', 'comedian', 'unknown']},
    catchPhrase: {type: String, rquired: true},
}, 
{
    timestamps: true,
});

const Celebrity = mongoose.model('celebrity', celebritySchema);

module.exports = Celebrity;
