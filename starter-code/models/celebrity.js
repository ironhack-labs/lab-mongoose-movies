const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const celebSchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Celebrity = mongoose.model('Celebrity', celebSchema);

// exports module in order to use it on the rout
module.exports = Celebrity;