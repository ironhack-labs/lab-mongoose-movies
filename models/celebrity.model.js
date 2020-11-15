const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const celebritySchema = new Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },

    occupation: {
        type: String,
        required: true,
        trim: true
    },

    catchPhrase: {
        type: String,
        required: true
    },

    image: {
        type: String,
        require: true,
        default: 'https://www.minervastrategies.com/wp-content/uploads/2016/03/default-avatar.jpg'
    }

}, {
    timestamps: true
});


const Celebrity = mongoose.model('Celebrity', celebritySchema);

module.exports = Celebrity;

