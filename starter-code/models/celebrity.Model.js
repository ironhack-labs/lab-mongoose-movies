const mongoose = require('mongoose')

const celebrityScheme = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },

    occupation:{
        type: String,
        require: true
    },

    catchPhrase:{
        type: String,
        require: true 
    },

    image: {
        type: String,
        validate: {
            validator: (text) => {
                return text.startsWith("http");
            },
            message: "URL must start with HTTP/HTTPS"
        }
    }
})

const Celebrity = mongoose.model('Celebrity', celebrityScheme)

module.exports = Celebrity