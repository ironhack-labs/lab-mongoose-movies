const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const celebritySchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        maxlength: [15, 'Name must be not longer than 15 chars'],
        unique: [true, 'The celebrity already exist'],
        trim: true
    },
    occupation: {
        type: String,
        required: [true, 'Occupation is required'],
        maxlength: [15, 'Occupation must be not longer than 15 chars']
    },
    catchPhrase: {
        type: String,
        required: [true, 'A catch phrase is required']
    }
}, { timestamps: true });

const Celebrity = mongoose.model("Celebrity", celebritySchema);

module.exports = Celebrity;
