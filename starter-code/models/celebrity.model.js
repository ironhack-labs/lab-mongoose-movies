const mongoose = require('mongoose')


const celebritySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true                      // Delete white spaces
    },
    occupation: {
        type: String,
        required: true,
        default: 'Unknown',
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
})

const Celebrity = mongoose.model('Celebrity', celebritySchema)

module.exports = Celebrity